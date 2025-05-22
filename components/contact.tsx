"use client";
import Image from "next/image";
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
import { useEffect, useState } from "react";
import { TipoHabitacionResponse } from "./tipohabitacion/lib/tipohabitacion.interface";
import { getTiposHabitacion } from "./tipohabitacion/lib/tipohabitacion.actions";

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

  return (
    <section className="py-8 bg-[#f0e9df]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="flex justify-center items-center gap-4 mb-4">
            <Image
              src={"/icons/arrow-left.svg"}
              alt="arrow-right"
              width={36}
              height={36}
            ></Image>
            <span className="text-hotel-gold uppercase font-medium">
              Contáctanos
            </span>
            <Image
              src={"/icons/arrow-right.svg"}
              alt="arrow-right"
              width={36}
              height={36}
            ></Image>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-24">
          <div className="w-full md:w-1/2 md:p-8">
            <h2 className="text-3xl text-center font-playfair mb-6">
              CONTACTO
            </h2>
            <form>
              <div className="mb-4">
                <Input
                  type="text"
                  placeholder="Nombre completo*"
                  className="w-full p-3 bg-hotel-darkBeige rounded-md border-none"
                />
              </div>
              <div className="mb-4 flex gap-4 md:gap-12">
                <Input
                  type="text"
                  placeholder="Teléfono*"
                  className="w-1/2 p-3 bg-hotel-darkBeige rounded-md border-none"
                  maxLength={9}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (!/^\d{0,9}$/.test(value)) {
                      e.target.value = value.slice(0, -1);
                    }
                  }}
                />
                <Select>
                  <SelectTrigger className="w-1/2 p-3 bg-hotel-darkBeige rounded-md border-none data-[placeholder]:text-gray-500">
                    <SelectValue placeholder="Tipo de Servicio" className="" />
                  </SelectTrigger>
                  <SelectContent>
                    {tiposHabitacion.success &&
                      tiposHabitacion.data.map((tipo) => (
                        <SelectItem key={tipo.id} value={tipo.nombre}>
                          {tipo.nombre}
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="mb-4">
                <Input
                  type="email"
                  placeholder="E-mail*"
                  className="w-full p-3 bg-hotel-darkBeige rounded-md border-none"
                />
              </div>
              <div className="mb-4">
                <Textarea
                  placeholder="Escribe tu mensaje aquí"
                  className="w-full p-3 bg-hotel-darkBeige rounded-md border-none h-24"
                ></Textarea>
              </div>
              <div className="flex">
                <Button variant="secondary">Enviar</Button>
              </div>
            </form>
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
