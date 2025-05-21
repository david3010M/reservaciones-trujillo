"use client";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogTitle,
} from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import { HabitacionDisponibleResponseData } from "./lib/habitaciondisponible.interface";
import { X } from "lucide-react";
import { BASE_URL } from "@/lib/config";

interface Props {
  room: HabitacionDisponibleResponseData;
}

export default function MainCarousel({ room }: Props) {
  const [api, setApi] = useState<CarouselApi>();

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (index: number) => {
    setActiveImageIndex(index);
    setIsModalOpen(true);
  };

  useEffect(() => {
    if (api) {
      api.scrollTo(activeImageIndex);
    }
  }, [activeImageIndex, api]);

  return (
    <div className="w-full lg:w-1/2">
      {/* Main Carousel */}
      <Carousel
        className="w-full mb-4"
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {room.tipohabitacion.imagenes.map((image, index) => (
            <CarouselItem key={index}>
              <div
                className="relative h-[400px] w-full cursor-pointer"
                onClick={() => openModal(index)}
              >
                <Image
                  src={BASE_URL + "/" + image.url || "/placeholder.svg"}
                  alt={`${BASE_URL}/${room.tipohabitacion.nombre} - Imagen ${
                    index + 1
                  }`}
                  fill
                  className="object-cover rounded-none"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="!absolute left-2 bg-black/50 text-white border-none hover:bg-black/70" />
        <CarouselNext className="!absolute right-2 bg-black/50 text-white border-none hover:bg-black/70" />
      </Carousel>

      <div className="flex justify-start items-center mb-6">
        <div className="relative inline-block">
          <Image
            src="/habitaciones/precio.jpg"
            alt="Background Price"
            width={150}
            height={100}
            className="object-cover max-h-16"
          />
          <div className="absolute inset-0 flex flex-col justify-center bg-hotel-gold/80 backdrop-blur-sm items-start px-2 text-white">
            <div className="text-2xl font-playfair text-white">
              S/ {room.tipohabitacion.precio}
            </div>
            <div className="text-xs uppercase text-gray-200">NOCHE</div>
          </div>
        </div>
        <div className="relative inline-block">
          <Image
            src="/habitaciones/personas.jpg"
            alt="Background Price"
            width={200}
            height={100}
            className="object-cover max-h-16"
          />
          <div className="absolute inset-0 flex flex-col justify-center bg-hotel-gold/80 backdrop-blur-sm items-start px-2 text-white">
            <div className="text-2xl font-playfair text-white">
              {room.tipohabitacion.capacidad}{" "}
              {room.tipohabitacion.capacidad > 1 ? "Huéspedes" : "Huésped"}
            </div>
            <div className="text-xs uppercase text-gray-200">CANTIDAD</div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-5xl bg-black border-none">
          <DialogTitle className="sr-only" />
          <DialogClose className="absolute right-4 top-4 z-10 rounded-full bg-background p-2 text-foreground hover:bg-background/70">
            <X className="h-4 w-4" />
          </DialogClose>

          <Carousel
            className="w-full"
            setApi={setApi}
            opts={{
              loop: true,
            }}
          >
            <CarouselContent>
              {room.tipohabitacion.imagenes.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative h-[80vh] w-full">
                    <Image
                      src={image.url || "/placeholder.svg"}
                      alt={`${room.tipohabitacion.nombre} - Imagen ${
                        index + 1
                      }`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="!absolute left-4 bg-black/50 text-white border-none hover:bg-black/70" />
            <CarouselNext className="!absolute right-4 bg-black/50 text-white border-none hover:bg-black/70" />
          </Carousel>
        </DialogContent>
      </Dialog>
    </div>
  );
}
