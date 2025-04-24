"use client";

import { use, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Wifi, Tv, Bath, Users, WashingMachine } from "lucide-react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import Title from "@/components/title";

// Definición de tipos para las habitaciones
type RoomType = {
  slug: string;
  title: string;
  capacity: number;
  price: number;
  description: string;
  images: string[];
  amenities: string[];
};

// Datos de muestra para las habitaciones
const rooms: Record<string, RoomType> = {
  simple: {
    slug: "simple",
    title: "Habitación Simple",
    capacity: 1,
    price: 59,
    description:
      "Aliquam erat volutpat. Quisque sed nisi hendrerit, consectetur ipsum sed, rhoncus ligula. Donec euismod laoreet tortor, non imperdiet libero aliquam in. Vestibulum varius condimentum volutpat. Nunc in sapien a orci maximus.",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    amenities: [
      "Cama king",
      "Servicio lavandería",
      "Wi-Fi",
      "Baño privado",
      "Ropero y área de descanso",
      "TV LED",
    ],
  },
  doble: {
    slug: "doble",
    title: "Habitación Doble",
    capacity: 4,
    price: 89,
    description:
      "Perfecta para amigos o familiares que desean compartir su estadía sin perder privacidad. Aliquam erat volutpat. Quisque sed nisi hendrerit, consectetur ipsum sed, rhoncus ligula. Donec euismod laoreet tortor, non imperdiet libero aliquam in.",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    amenities: [
      "2 camas dobles",
      "Servicio lavandería",
      "Wi-Fi",
      "Baño privado",
      "Ropero y área de descanso",
      "TV LED",
    ],
  },
  matrimonial: {
    slug: "matrimonial",
    title: "Habitación Matrimonial",
    capacity: 2,
    price: 79,
    description:
      "Opción ideal para parejas que buscan comodidad y privacidad. Aliquam erat volutpat. Quisque sed nisi hendrerit, consectetur ipsum sed, rhoncus ligula. Donec euismod laoreet tortor, non imperdiet libero aliquam in.",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    amenities: [
      "Cama king size",
      "Servicio lavandería",
      "Wi-Fi",
      "Baño privado con tina",
      "Ropero y área de descanso",
      "TV LED",
    ],
  },
};

export default function RoomDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const room = rooms[slug];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi>();

  if (!room) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-playfair mb-4">
            Habitación no encontrada
          </h1>
          <Link href="/habitaciones" className="text-primary hover:underline">
            Volver a habitaciones
          </Link>
        </div>
      </div>
    );
  }

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
    <main className="min-h-screen bg-white">
      {/* Habitaciones Header */}
      <Title
        title="Habitaciones"
        description=" Ofrecemos habitaciones diseñadas para brindar comodidad, privacidad
            y una experiencia de estadía excepcional, adaptándose a las
            necesidades de cada huésped."
      />

      {/* Room Detail Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left Column - Room Images */}
            <div className="w-full lg:w-1/2">
              {/* Main Carousel */}
              <Carousel
                className="w-full mb-4"
                opts={{
                  loop: true,
                }}
              >
                <CarouselContent>
                  {room.images.map((image, index) => (
                    <CarouselItem key={index}>
                      <div
                        className="relative h-[400px] w-full cursor-pointer"
                        onClick={() => openModal(index)}
                      >
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`${room.title} - Imagen ${index + 1}`}
                          fill
                          className="object-cover rounded-md"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="!absolute left-2 bg-black/50 text-white border-none hover:bg-black/70" />
                <CarouselNext className="!absolute right-2 bg-black/50 text-white border-none hover:bg-black/70" />
              </Carousel>

              <div className="flex justify-between items-center mb-6">
                <div>
                  <div className="text-3xl font-playfair text-[#74562e]">
                    S/{room.price}.00
                  </div>
                  <div className="text-xs uppercase text-gray-600">NOCHE</div>
                </div>
                <div className="text-right">
                  <div className="text-xl font-playfair">
                    {room.capacity} HUÉSPED
                  </div>
                  <div className="text-xs uppercase text-gray-600">
                    CANTIDAD
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Room Info */}
            <div className="w-full lg:w-1/2">
              <div className="uppercase text-xs font-poppins font-semibold tracking-widest text-hotel-gray mb-2">
                HABITACIONES
              </div>
              <h2 className="text-4xl font-playfair mb-8">{room.title}</h2>
              {/* Room Description */}
              <div className="mt-8">
                <p className="text-gray-700 leading-relaxed">
                  {room.description}
                </p>
              </div>
              <div className="py-8">
                {/* Amenities */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {room.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center mr-2">
                        {index === 0 && <Bath className="h-4 w-4 text-white" />}
                        {index === 1 && (
                          <WashingMachine className="h-4 w-4 text-white" />
                        )}
                        {index === 2 && <Wifi className="h-4 w-4 text-white" />}
                        {index === 3 && <Bath className="h-4 w-4 text-white" />}
                        {index === 4 && (
                          <Users className="h-4 w-4 text-white" />
                        )}
                        {index === 5 && <Tv className="h-4 w-4 text-white" />}
                      </div>
                      <span className="text-sm uppercase font-semibold">{amenity}</span>
                    </div>
                  ))}
                </div>

                {/* Reserve Button */}
                <Link
                  href={`/habitaciones/${slug}/reservar`}
                  className="block w-full bg-[#74562e] text-white py-3 px-4 rounded-md text-center uppercase tracking-wider font-medium hover:bg-[#5c4523] transition-colors"
                >
                  Reservar ahora
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

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
              {room.images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative h-[80vh] w-full">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${room.title} - Imagen ${index + 1}`}
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
    </main>
  );
}
