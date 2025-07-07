"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { sendContactRequest } from "./contact/lib/contact.actions";
import { successToast } from "@/lib/core.function";

const contactSchema = z.object({
  nombre: z.string().min(1, "Nombre requerido"),
  email: z.string().email("Email inválido"),
  mensaje: z.string().min(1, "Mensaje requerido"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactRestaurant() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      nombre: "",
      email: "",
      mensaje: "",
    },
  });

  const DictionaryFormFields = {
    nombre: "Nombre",
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
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="flex justify-center items-center gap-4 mb-4">
            <span className="text-hotel-brown font-marcellus font-medium">
              Haz que tu estancia sea memorable
            </span>
          </div>
          <h2 className="text-4xl text-center font-marcellus mb-6 text-[#d69c4f9e]">
            Tiene <span className="text-black">alguna pregunta?</span>
          </h2>
        </div>
        <div className="flex flex-col md:flex-row max-w-screen-lg mx-auto px-8 py-16 bg-[#F7F0E7]">
          <div className="w-full flex flex-col gap-12 md:w-1/3 border-b md:border-b-0 pb-8 mb-8 md:border-r border-hotel-brown md:border-primary">
            <div>
              <h1 className="text-3xl text-start font-playfair mb-6">
                Contáctanos
              </h1>
              <p className="text-sm">906250017</p>
            </div>
            <div>
              <h1 className="text-3xl text-start font-playfair mb-6">
                Ubicación
              </h1>
              <p className="text-sm">Av. Tahuantisuyo 812</p>
              <p className="text-sm">La Esperanza, Trujillo</p>
            </div>
            <div>
              <h1 className="text-3xl text-start font-playfair mb-6">E-mail</h1>
              <p className="text-sm">recepcionestrujillo@gmail.com</p>
            </div>
          </div>
          <div className="md:w-2/3 md:p-8">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-full flex flex-col gap-4"
              >
                <FormField
                  control={form.control}
                  name="nombre"
                  render={({ field }) => (
                    <FormItem>
                      <Label className="text-sm text-hotel-dark font-lato">
                        Nombre
                      </Label>
                      <FormControl>
                        <Input
                          className="w-full p-3 bg-transparent rounded-none border-l-0 border-r-0 border-t-0 border-b border-hotel-gold"
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
                      <Label className="text-sm text-hotel-dark font-lato">
                        E-mail
                      </Label>
                      <FormControl>
                        <Input
                          type="email"
                          className="w-full p-3 bg-transparent rounded-none border-l-0 border-r-0 border-t-0 border-b border-hotel-gold"
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
                    <FormItem>
                      <Label className="text-sm text-hotel-dark font-lato">
                        Mensaje
                      </Label>
                      <FormControl>
                        <Textarea
                          className="w-full p-3 bg-transparent rounded-none border-l-0 border-r-0 border-t-0 border-b border-hotel-gold h-24"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex">
                  <Button
                    variant="default"
                    className="rounded-none px-8"
                    type="submit"
                  >
                    Enviar
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
