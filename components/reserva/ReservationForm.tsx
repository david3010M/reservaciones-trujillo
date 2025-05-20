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
import Link from "next/link";

const reservationSchema = z.object({
  nombres: z.string().min(1, "Nombres requeridos"),
  apellidoPaterno: z.string().min(1, "Apellido paterno requerido"),
  apellidoMaterno: z.string().min(1, "Apellido materno requerido"),
  email: z.string().email("Email inválido"),
  telefono: z.string().min(6, "Número inválido"),
});

type ReservationFormValues = z.infer<typeof reservationSchema>;

export default function ReservationForm({ id }: { id: string }) {
  const form = useForm<ReservationFormValues>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      nombres: "",
      apellidoPaterno: "",
      apellidoMaterno: "",
      email: "",
      telefono: "",
    },
  });

  const onSubmit = (data: ReservationFormValues) => {
    // Handle form submission
    console.log(form.getValues());
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
                    <FormItem>
                      <FormLabel>Número Móvil</FormLabel>
                      <FormControl>
                        <div className="flex">
                          <div className="border border-gray-300 rounded-l-md p-2 bg-gray-50 flex items-center">
                            <span className="text-sm">🇵🇪</span>
                          </div>
                          <Input
                            type="tel"
                            className="rounded-l-none"
                            placeholder="Número de teléfono"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
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
