"use client";

import Image from "next/image";
import { z } from "zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Button } from "./ui/button";
import { TipoHabitacionResponse } from "./tipohabitacion/lib/tipohabitacion.interface";
import { getTiposHabitacion } from "./tipohabitacion/lib/tipohabitacion.actions";
import { sendContactRequest } from "./contact/lib/contact.actions";
import { successToast } from "@/lib/core.function";

const contactSchema = z.object({
  nombre: z.string().min(1, "Nombre requerido"),
  telefono: z.string().min(9, "Debe tener 9 dígitos"),
  tipo_servicio: z.string().min(1, "Tipo requerido"),
  email: z.string().email("Email inválido"),
  mensaje: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const [tiposHabitacion, setTiposHabitacion] =
    useState<TipoHabitacionResponse>({
      success: false,
      data: [],
    });

  useEffect(() => {
    const fetchTiposHabitacion = async () => {
      const data = await getTiposHabitacion();
      setTiposHabitacion(data);
    };
    fetchTiposHabitacion();
  }, []);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      nombre: "",
      telefono: "",
      tipo_servicio: "",
      email: "",
      mensaje: "",
    },
  });

  const DictionaryFormFields = {
    nombre: "Nombre completo",
    telefono: "Teléfono",
    tipo_servicio: "Tipo de Habitación",
    email: "Correo",
    mensaje: "Mensaje",
  };

  const onSubmit = async (data: ContactFormValues) => {
    const payload = {
      primaryColor: "#74562E",
      secondaryColor: "#fae9d1",
      foreground: "#000000",
      emails: ["Administración@hotelrecepcionestrujillo.com"],
      values: Object.entries(data).map(([key, value]) => ({
        key:
          DictionaryFormFields[key as keyof typeof DictionaryFormFields] || key,
        value,
      })),
    };

    await sendContactRequest(payload)
      .then((response) => {
        successToast(response.message);
        form.reset();
      })
      .catch((error: any) => {
        console.error(
          "Error al enviar el formulario:",
          error?.response?.data?.message
        );
      });
  };

  return (
    <section className="py-8 bg-[#f0e9df]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="flex justify-center items-center gap-4 mb-4">
            <Image
              src="/icons/arrow-left.svg"
              alt="arrow-left"
              width={36}
              height={36}
            />
            <span className="text-hotel-gold uppercase font-medium">
              Contáctanos
            </span>
            <Image
              src="/icons/arrow-right.svg"
              alt="arrow-right"
              width={36}
              height={36}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-24">
          <div className="w-full md:w-1/2 md:p-8">
            <h2 className="text-3xl text-center font-playfair mb-6">
              CONTACTO
            </h2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                  control={form.control}
                  name="nombre"
                  render={({ field }) => (
                    <FormItem className="mb-4">
                      <FormControl>
                        <Input
                          placeholder="Nombre completo*"
                          className="w-full p-3 bg-hotel-darkBeige rounded-md border-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="mb-4 flex gap-4 md:gap-12">
                  <FormField
                    control={form.control}
                    name="telefono"
                    render={({ field }) => (
                      <FormItem className="w-1/2">
                        <FormControl>
                          <Input
                            placeholder="Teléfono*"
                            className="p-3 bg-hotel-darkBeige rounded-md border-none"
                            maxLength={9}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="tipo_servicio"
                    render={({ field }) => (
                      <FormItem className="w-1/2">
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="p-3 bg-hotel-darkBeige rounded-md border-none data-[placeholder]:text-gray-500">
                              <SelectValue placeholder="Tipo de Servicio" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {tiposHabitacion.success &&
                              tiposHabitacion.data.map((tipo) => (
                                <SelectItem key={tipo.id} value={tipo.nombre}>
                                  {tipo.nombre}
                                </SelectItem>
                              ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="mb-4">
                      <FormControl>
                        <Input
                          placeholder="E-mail*"
                          className="w-full p-3 bg-hotel-darkBeige rounded-md border-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="mensaje"
                  render={({ field }) => (
                    <FormItem className="mb-4">
                      <FormControl>
                        <Textarea
                          placeholder="Escribe tu mensaje aquí"
                          className="w-full p-3 bg-hotel-darkBeige rounded-md border-none h-24"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex">
                  <Button variant="secondary" type="submit">
                    Enviar
                  </Button>
                </div>
              </form>
            </Form>
          </div>
          <div className="w-full md:w-1/2">
            <div className="relative h-full min-h-[300px]">
              <Image
                src="/home/catedral.png"
                alt="Trujillo Church"
                fill
                className="object-cover rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
