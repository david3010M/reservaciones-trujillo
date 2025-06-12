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
import { SUCURSAL } from "@/lib/config";
import { format } from "date-fns";
import { errorToast, successToast } from "@/lib/core.function";
import { useRouter } from "next/navigation";
import {
  ReservaSalonRequest,
  SalonResponseDataPaquetes,
} from "@/components/salones/lib/salon.interface";
import useReservaSalonStore from "@/components/salones/lib/reservaSalon.store";
import { createReservationSalon } from "@/components/salones/lib/salon.actions";
import { PhoneInput } from "../phone-input";
import { isValidPhoneNumber } from "react-phone-number-input";

const reservationSchema = z.object({
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
});

type ReservationFormValues = z.infer<typeof reservationSchema>;

interface Props {
  id: string;
  packageSalon: SalonResponseDataPaquetes;
}

export default function ReservationForm({ id, packageSalon }: Props) {
  const router = useRouter();

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
  });

  const { dateFrom, people } = useReservaSalonStore();

  const onSubmit = async (data: ReservationFormValues) => {
    const precio = Number(packageSalon.precio);
    const dateFormatted = format(dateFrom, "yyyy-MM-dd");

    const newReservation: ReservaSalonRequest = {
      sucursal_id: SUCURSAL,
      salon_package_id: packageSalon.id,
      fechareserva: dateFormatted,
      total: precio * people,
      nropersonas: people,
      comentario: "Reserva de salón desde la web",
      persona: {
        nombres: data.nombres ?? " ",
        apellidos: `${data.apellidoPaterno} ${data.apellidoMaterno}`,
        nrodoc: data.nrodoc,
        telefono: data.telefono,
        email: data.email,
        direccion: data.address ?? "-",
      },
    };

    console.log(newReservation);
    await createReservationSalon(newReservation).then((res) => {
      if (res.success) {
        successToast("Reserva creada con éxito");
        form.reset();
        // Redirigir a la página de confirmación
        router.push(
          `/eventos/${id}/reservar/${res.codigo_reserva}/confirmacion`
        );
      } else {
        errorToast("Error al crear la reserva", "Por favor intente nuevamente");
      }
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
                disabled={!form.formState.isValid}
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
