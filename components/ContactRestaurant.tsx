"use client";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Label } from "./ui/label";

export default function ContactRestaurant() {
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
            <form className="w-full flex flex-col gap-4">
              <div className="mb-4">
                <Label className="text-sm text-hotel-dark font-lato">
                  Nombre
                </Label>
                <Input
                  type="text"
                  placeholder=""
                  className="w-full p-3 bg-transparent rounded-none border-l-0 border-r-0 border-t-0 border-b border-hotel-gold"
                />
              </div>
              <div className="mb-4">
                <Label className="text-sm text-hotel-dark font-lato">
                  E-mail
                </Label>
                <Input
                  type="email"
                  placeholder="E-mail*"
                  className="w-full p-3 bg-transparent rounded-none border-l-0 border-r-0 border-t-0 border-b border-hotel-gold"
                />
              </div>
              <div className="mb-4">
                <Label className="text-sm text-hotel-dark font-lato">
                  Mensaje
                </Label>
                <Textarea
                  placeholder="Escribe tu mensaje aquí"
                  className="w-full p-3 bg-transparent rounded-none border-l-0 border-r-0 border-t-0 border-b border-hotel-gold"
                ></Textarea>
              </div>
              <div className="flex">
                <Button variant="default" className="rounded-none px-8">
                  Enviar
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
