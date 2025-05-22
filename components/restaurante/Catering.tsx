import { Button } from "../ui/button";
import { Component } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";

const images = [
  "/restaurante/carousel/1.jpg",
  "/restaurante/carousel/2.jpg",
  "/restaurante/carousel/3.jpg",
];

export default function Catering() {
  const data = {
    title: "Catering para eventos",
    subTitle: "¿Por qué elegir nuestro servicio de catering?",
    reasons: [
      "Bocaditos y Finger Food",
      "Menús Formales",
      "Buffet Personalizado",
      "Estaciones Temáticas",
    ],
    description:
      "Nos encargamos de cada detalle para que disfrutes sin preocupaciones. Contáctanos para diseñar el menú perfecto según el tipo de evento, número de invitados y ubicación.",
  };

  return (
    <section className="py-8 md:py-8">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col items-end justify-center w-full max-w-screen-lg mx-auto px-2">
          <h2 className="text-3xl md:text-4xl mb-8 font-marcellus">
            <span className="text-primary">Catering</span> para Eventos
          </h2>
        </div>
        <div className="flex flex-col md:flex-row md:h-[500px] w-full">
          <div className="md:w-2/5 bg-primary flex flex-col justify-center items-center gap-4 p-8 text-secondary">
            <h1 className="text-2xl font-bold text-center font-lato uppercase mb-4">
              {data.subTitle}
            </h1>
            <div className="flex flex-col gap-2 mb-4 w-full items-start">
              {data.reasons.map((reason, index) => (
                <div key={index}>
                  <Component className="inline-block mr-2 w-4 h-4" /> {reason}
                  {reason}
                </div>
              ))}
            </div>
            <p className="text-sm text-center mt-8">{data.description}</p>
            <Button className="mt-1" variant="outline">
              Contáctanos
            </Button>
          </div>
          <div className="md:w-3/5 bg-secondary">
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full max-w-screen-2xl mx-auto"
            >
              <CarouselContent>
                {images.map((image, index) => (
                  <CarouselItem key={index} className="">
                    <div>
                      <Card className="rounded-none border-none shadow-none">
                        <CardContent className="flex items-center justify-center p-6 h-[500px] relative">
                          <Image
                            src={image}
                            alt={image}
                            fill
                            className="object-cover"
                          />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="absolute p-8 right-0 bottom-0">
                <CarouselPrevious
                  variant={"outline"}
                  className="!absolute right-4 rounded-none bg-secondary/95  text-white border-none"
                ></CarouselPrevious>
                <CarouselNext
                  variant={"outline"}
                  className="!absolute right-8 rounded-none bg-secondary/95 text-white border-none"
                ></CarouselNext>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
