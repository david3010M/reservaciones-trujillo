"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ReservaRequest } from "./lib/reserva.interface";
import { SUCURSAL } from "@/lib/config";
import useReservaStore from "./lib/reserva.store";
import { format } from "date-fns";
import useHabitacionStore from "../tipohabitacion/lib/tipohabitacion.store";
import { useEffect } from "react";
import { createReservation } from "./lib/reserva.actions";
import { errorToast, successToast } from "@/lib/core.function";
import { useRouter } from "next/navigation";
import { HabitacionesDisponibleResponseData } from "../tipohabitacion/lib/habitacionesdisponible.interface";
import { isValidPhoneNumber } from "react-phone-number-input";
import { PhoneInput } from "../phone-input";

export const reservationSchema = z
  .object({
    tipoComprobante: z.enum(["BOLETA", "FACTURA"]),
    tipoDocumento: z.enum(["DNI", "CE", "PASAPORTE", "RUC"]).optional(),
    nrodoc: z
      .string()
      .nonempty("Debes ingresar tu documento")
      .regex(/^[0-9]+$/, { message: "Solo se permiten números" })
      .refine((val) => val.length === 8 || val.length === 11, {
        message: "Documento inválido",
      }),
    nombres: z.string().optional(),
    apellidoPaterno: z.string().optional(),
    apellidoMaterno: z.string().optional(),
    razonSocial: z.string().optional(),
    direccionFacturacion: z.string().optional(),
    email: z.string().email("Email inválido"),
    telefono: z
      .string()
      .min(6, "Número inválido")
      .regex(/^\+?[0-9]+$/, {
        message: "Solo se permiten números",
      })
      .refine((val) => isValidPhoneNumber(val), {
        message: "Número inválido",
      }),
    address: z.string().optional(),
    telefonofijo: z
      .string()
      .optional()
      .refine((val) => !val || /^\+?[0-9]+$/.test(val), {
        message: "Solo se permiten números",
      })
      .refine((val) => !val || isValidPhoneNumber(val), {
        message: "Número inválido",
      }),
    telefonomovil: z
      .string()
      .optional()
      .refine((val) => !val || /^\+?[0-9]+$/.test(val), {
        message: "Solo se permiten números",
      })
      .refine((val) => !val || isValidPhoneNumber(val), {
        message: "Número inválido",
      }),
    nombreCompleto: z.string().optional(),
    apellidoCompleto: z.string().optional(),
    numeroDocumento: z.string().optional(),
    emailPersona: z.string().email("Email inválido").optional(),
  })
  .superRefine((data, ctx) => {
    if (!data.tipoDocumento) {
      ctx.addIssue({
        path: ["tipoDocumento"],
        code: z.ZodIssueCode.custom,
        message: "Selecciona un tipo de documento",
      });
    }
    if (data.tipoComprobante === "BOLETA" && data.tipoDocumento === "DNI") {
      if (!data.nombres || !data.apellidoPaterno || !data.apellidoMaterno) {
        ctx.addIssue({
          path: ["nombres"],
          code: z.ZodIssueCode.custom,
          message: "Nombres y apellidos requeridos",
        });
      }
    }
    if (data.tipoComprobante === "FACTURA") {
      if (!data.razonSocial) {
        ctx.addIssue({
          path: ["razonSocial"],
          code: z.ZodIssueCode.custom,
          message: "Razón Social requerida",
        });
      }
      if (!data.direccionFacturacion) {
        ctx.addIssue({
          path: ["direccionFacturacion"],
          code: z.ZodIssueCode.custom,
          message: "Dirección requerida",
        });
      }
    }
  });

type ReservationFormValues = z.infer<typeof reservationSchema>;

interface Props {
  room: HabitacionesDisponibleResponseData;
}

export default function ReservationForm({ room }: Props) {
  const router = useRouter();
  const { habitacionId, dateFrom, getNights, people } = useReservaStore();
  const { loadHabitaciones } = useHabitacionStore();

  const habitacion = room.habitaciones.find((h) => h.id === habitacionId);

  const form = useForm<ReservationFormValues>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      tipoComprobante: "BOLETA",
      tipoDocumento: undefined,
      nrodoc: "",
      nombres: "",
      apellidoPaterno: "",
      apellidoMaterno: "",
      razonSocial: "",
      direccionFacturacion: "",
      email: "",
      telefono: "",
      address: "",
      telefonofijo: "",
      telefonomovil: "",
      nombreCompleto: "",
      apellidoCompleto: "",
      numeroDocumento: "",
      emailPersona: "",
    },
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const tipoComprobante = form.watch("tipoComprobante");

  useEffect(() => {
    loadHabitaciones();
  }, []);

  useEffect(() => {
    const subscription = form.watch(async (value, { name }) => {
      if (
        name === "numeroDocumento" &&
        tipoComprobante === "BOLETA" &&
        value.numeroDocumento?.length === 8
      ) {
        const datos = await consultaDNI(value.numeroDocumento);
        if (datos) {
          form.setValue("nombreCompleto", datos.nombres);
          form.setValue(
            "apellidoCompleto",
            `${datos.apellidoPaterno} ${datos.apellidoMaterno}`
          );
        }
      }
      if (
        name === "numeroDocumento" &&
        tipoComprobante === "FACTURA" &&
        value.numeroDocumento?.length === 11
      ) {
        const datos = await consultaRUC(value.numeroDocumento);
        if (datos) {
          form.setValue("razonSocial", datos.razonSocial);
          form.setValue("direccionFacturacion", datos.direccion);
        }
      }
    });
    return () => subscription.unsubscribe();
  }, [form, tipoComprobante]);

  async function consultaDNI(dni: string) {
    const url =
      location.protocol === "https:"
        ? "https://facturae-garzasoft.com/facturacion/buscaCliente/BuscaCliente2.php"
        : "http://facturae-garzasoft.com/facturacion/buscaCliente/BuscaCliente2.php";
    try {
      const response = await fetch(
        `${url}?dni=${dni}&fe=N&token=qusEj_w7aHEpX`
      );
      const data = await response.json();
      if (data && data.nombres && data.apepat && data.apemat) {
        return {
          nombres: data.nombres.trim(),
          apellidoPaterno: data.apepat.trim(),
          apellidoMaterno: data.apemat.trim(),
          fechanac: data.fecnac,
        };
      }
      return null;
    } catch (error) {
      console.error("Error al obtener datos del DNI:", error);
      return null;
    }
  }

  async function consultaRUC(ruc: string) {
    const url =
      location.protocol === "https:"
        ? "https://comprobante-e.com/facturacion/buscaCliente/BuscaClienteRuc.php"
        : "http://comprobante-e.com/facturacion/buscaCliente/BuscaClienteRuc.php";
    try {
      const response = await fetch(
        `${url}?fe=N&token=qusEj_w7aHEpX&ruc=${ruc}`
      );
      const data = await response.json();
      if (data && data.RazonSocial) {
        return {
          razonSocial: data.RazonSocial.trim(),
          direccion: data.Direccion?.trim() || "",
        };
      }
      return null;
    } catch (error) {
      console.error("Error al obtener datos del RUC:", error);
      return null;
    }
  }

  const onSubmit = async (data: ReservationFormValues) => {
    const precio = Number(room.tipohabitacion.precio);
    const dateFormatted = format(dateFrom, "yyyy-MM-dd");
    const newReservation: ReservaRequest = {
      sucursal_id: SUCURSAL,
      fechavencimiento: dateFormatted,
      noches: getNights(),
      total: precio * getNights(),
      adelanto: 0,
      preciohabitacion: precio,
      medio_pago_adelanto_id: null,
      nropersonas: people,
      comentario: "Reserva desde la web",
      habitacion_id: habitacion?.id,
      persona: {
        nombres: data.nombres || "-",
        apellidos: `${data.apellidoPaterno || "-"} ${
          data.apellidoMaterno || "-"
        }`,
        nrodoc: data.nrodoc,
        telefono: data.telefono,
        email: data.email,
        direccion: data.address || "-",
      },
      persona_facturacion:
        data.tipoComprobante === "FACTURA"
          ? {
              nombres: data.razonSocial || " ",
              apellidos: " ",
              nrodoc: data.numeroDocumento || data.nrodoc,
              telefono: data.telefonomovil ?? "-",
              telefonofijo: data.telefonofijo || "-",
              telefonomovil: data.telefonomovil ?? "-",
              email: data.emailPersona || "-",
              direccion: data.direccionFacturacion || "-",
            }
          : {
              nombres: data.nombreCompleto || " ",
              apellidos: data.apellidoCompleto || " ",
              nrodoc: data.numeroDocumento || data.nrodoc,
              telefono: data.telefonomovil ?? "-",
              telefonofijo: data.telefonofijo || "-",
              telefonomovil: data.telefonomovil ?? "-",
              email: data.emailPersona || "-",
              direccion: data.direccionFacturacion || "-",
            },
    };

    try {
      const res = await createReservation(newReservation);
      if (res.success) {
        successToast("Reserva creada con éxito");
        form.reset();
        router.push(`/reservacion/${res.codigo_reserva}`);
      } else {
        errorToast("Error al crear la reserva");
      }
    } catch (error: any) {
      errorToast(error.response?.data?.message || "Error al crear la reserva");
      form.reset();
      setTimeout(() => {
        router.push("/");
      }, 3000);
    }
  };

  return (
    <div className="col-start-1 row-start-3 md:col-span-3 md:row-span-2 md:col-start-3">
      <div className="bg-white rounded-md">
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4">Ingrese Su Información</h3>
        </div>
        <Form {...form}>
          <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="space-y-4 border rounded-md p-4">
              <h4 className="font-semibold text-lg">Datos del Titular</h4>

              <FormField
                control={form.control}
                name="tipoDocumento"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tipo de Documento</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona tipo documento" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="DNI">DNI</SelectItem>
                        <SelectItem value="CE">CE</SelectItem>
                        <SelectItem value="PASAPORTE">Pasaporte</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="nrodoc"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nro. Documento</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Documento"
                        maxLength={11}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="nombres"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombres</FormLabel>
                    <FormControl>
                      <Input placeholder="Nombres" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="apellidoPaterno"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Apellido Paterno</FormLabel>
                      <FormControl>
                        <Input placeholder="Apellido paterno" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="apellidoMaterno"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Apellido Materno</FormLabel>
                      <FormControl>
                        <Input placeholder="Apellido materno" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="telefono"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Teléfono</FormLabel>
                    <FormControl>
                      <PhoneInput
                        defaultCountry="PE"
                        placeholder="Número de teléfono"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Dirección</FormLabel>
                    <FormControl>
                      <Input placeholder="Dirección actual" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* COMPROBANTE Y DATOS DE FACTURACIÓN */}
            <div className="space-y-4 border rounded-md p-4">
              <h4 className="font-semibold text-lg">Datos de Facturación</h4>

              <FormField
                control={form.control}
                name="tipoComprobante"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tipo de Comprobante</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona comprobante" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="BOLETA">Boleta</SelectItem>
                        <SelectItem value="FACTURA">Factura</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {tipoComprobante === "BOLETA" && (
                <>
                  <FormField
                    control={form.control}
                    name="numeroDocumento"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>DNI</FormLabel>
                        <FormControl>
                          <Input placeholder="DNI" maxLength={8} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="nombreCompleto"
                    disabled
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nombres</FormLabel>
                        <FormControl>
                          <Input placeholder="Nombres" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="apellidoCompleto"
                    disabled
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Apellidos</FormLabel>
                        <FormControl>
                          <Input placeholder="Apellidos" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              )}

              {tipoComprobante === "FACTURA" && (
                <>
                  <FormField
                    control={form.control}
                    name="numeroDocumento"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>RUC</FormLabel>
                        <FormControl>
                          <Input placeholder="RUC" maxLength={11} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    disabled
                    name="razonSocial"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Razón Social</FormLabel>
                        <FormControl>
                          <Input placeholder="Razón Social" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              )}

              <FormField
                control={form.control}
                name="direccionFacturacion"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Dirección de Facturación</FormLabel>
                    <FormControl>
                      <Input placeholder="Dirección" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="emailPersona"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="telefonofijo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Teléfono Fijo</FormLabel>
                    <FormControl>
                      <PhoneInput
                        defaultCountry="PE"
                        placeholder="Teléfono fijo"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="telefonomovil"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Teléfono Móvil</FormLabel>
                    <FormControl>
                      <PhoneInput
                        defaultCountry="PE"
                        placeholder="Teléfono móvil"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button
              type="submit"
              disabled={!form.formState.isValid}
              className="w-full bg-primary text-white py-3 rounded-md font-medium ripple-xl"
            >
              Reservar
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
