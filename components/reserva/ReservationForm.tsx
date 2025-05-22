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

export const reservationSchema = z.object({
  nrodoc: z
    .string()
    .nonempty("Debes ingresar tu DNI u RUC")
    .regex(/^\d+$/, { message: "Solo se permiten números" }) // Solo números
    .refine((val) => val.length === 8 || val.length === 11, {
      message: "Debes ingresar un documento válido",
    }),
  nombres: z
    .string()
    .min(1, "Nombres requeridos")
    .regex(/^[a-zA-Z\s]+$/, {
      message: "Solo se permiten letras y espacios",
    }),
  apellidoPaterno: z
    .string()
    .min(1, "Apellido paterno requerido")
    .regex(/^[a-zA-Z\s]+$/, {
      message: "Solo se permiten letras y espacios",
    }),
  apellidoMaterno: z
    .string()
    .min(1, "Apellido materno requerido")
    .regex(/^[a-zA-Z\s]+$/, {
      message: "Solo se permiten letras y espacios",
    }),
  email: z.string().email("Email inválido"),
  telefono: z
    .string()
    .min(6, "Número inválido")
    .regex(/^\+?\d+$/, {
      message: "Solo se permiten números",
    })
    .refine((val) => isValidPhoneNumber(val), {
      message: "Número inválido",
    }),
  address: z.string().optional(),
});

type ReservationFormValues = z.infer<typeof reservationSchema>;

interface Props {
  room: HabitacionesDisponibleResponseData;
}

export default function ReservationForm({ room }: Props) {
  const router = useRouter();
  const { habitacionId } = useReservaStore();

  let habitacion = room.habitaciones.find(
    (habitacion) => habitacion.id === habitacionId
  );

  if (!habitacion) {
  }

  const form = useForm<ReservationFormValues>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      nrodoc: "",
      nombres: "",
      apellidoPaterno: "",
      apellidoMaterno: "",
      email: "",
      telefono: "",
      address: "",
    },
    criteriaMode: "all",
    mode: "onChange",
  });

  const { dateFrom, getNights, people } = useReservaStore();
  const { loadHabitaciones } = useHabitacionStore();

  useEffect(() => {
    loadHabitaciones();
  }, []);

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
        nombres: data.nombres,
        apellidos: `${data.apellidoPaterno} ${data.apellidoMaterno}`,
        nrodoc: data.nrodoc,
        telefono: data.telefono,
        email: data.email,
        direccion: data.address ?? "-",
      },
    };

    console.log(newReservation);
    await createReservation(newReservation)
      .then((res) => {
        if (res.success) {
          successToast("Reserva creada con éxito");
          form.reset();
          router.push(
            `/habitaciones/${dateFormatted}/${res.codigo_reserva}/reservar/confirmacion`
          );
        } else {
          errorToast("Error al crear la reserva");
        }
      })
      .catch((error: any) => {
        errorToast(
          error.response?.data?.message || "Error al crear la reserva"
        );
        form.reset();
        setTimeout(() => {
          router.push("/");
        }, 3000);
      });
  };

  return (
    <div className="col-start-1 row-start-3 md:col-span-3 md:row-span-2 md:col-start-3">
      <div className="bg-white rounded-md">
        <div className="mb-8">
          <h3 className="text-2xl font-poppins font-bold mb-2">
            Ingrese Su Información
          </h3>
          <p className="text-sm mb-4">
            Asegúrese de que la información que ya ha escrito en su perfil sea
            correcta.
          </p>
          <Form {...form}>
            <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <FormField
                  control={form.control}
                  name="nrodoc"
                  render={({ field }) => (
                    <FormItem className="col-span-2">
                      <FormLabel>DNI o RUC*</FormLabel>
                      <FormControl>
                        <Input
                          minLength={8}
                          maxLength={11}
                          placeholder="Numero de Documento"
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
                    <FormItem className="col-span-2">
                      <FormLabel>Nombres *</FormLabel>
                      <FormControl>
                        <Input placeholder="Nombres" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="apellidoPaterno"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Apellido paterno *</FormLabel>
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
                      <FormLabel>Apellido materno *</FormLabel>
                      <FormControl>
                        <Input placeholder="Apellido materno" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  name="telefono"
                  render={({ field }) => (
                    <FormItem className="flex flex-col items-start mt-2">
                      <FormLabel className="text-left">Teléfono</FormLabel>
                      <FormControl className="w-full">
                        <PhoneInput
                          defaultCountry="PE"
                          placeholder="Enter a phone number"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Dirección *</FormLabel>
                    <FormControl>
                      <Input placeholder="Dirección" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-md font-medium ripple-xl"
              >
                {/* <Link href={`/habitaciones/${id}/reservar/confirmacion`}> */}
                Reservar
                {/* </Link> */}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
