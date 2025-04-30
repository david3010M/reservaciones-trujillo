"use client";
import { getTiposHabitacion } from "@/components/tipohabitacion/lib/tipohabitacion.actions";
import {
  TipoHabitacionResponse,
  TipoHabitacionShowData,
} from "@/components/tipohabitacion/lib/tipohabitacion.interface";
import Title from "@/components/title";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function GaleriaPage() {
  const [tiposHabitacion, setTiposHabitacion] =
    useState<TipoHabitacionResponse>({
      success: false,
      data: [],
    });

  const [habitacionSeleccionada, setHabitacionSeleccionada] =
    useState<TipoHabitacionShowData | null>(null);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTiposHabitacion = async () => {
      setIsLoading(true);
      const data = await getTiposHabitacion();
      setTiposHabitacion(data);
      setHabitacionSeleccionada(data.data[0] || null);
      setIsLoading(false);
    };

    fetchTiposHabitacion();
  }, []);

  return (
    <main className="min-h-screen">
      {/* Galería Header */}
      <Title
        title="Galería"
        description="Explora nuestras modernas habitaciones, amplios salones para eventos
            y exquisitas decoraciones diseñadas para cada ocasión. Desde bodas y
            conferencias hasta estadías de lujo, cada espacio refleja nuestro
            compromiso con la calidad y la excelencia."
      />

      {/* Filter Categories */}
      <section className="py-8 bg-white">
        <div className="w-full flex justify-center">
          <div className="flex flex-wrap justify-center gap-2 bg-hotel-beige p-0.5 w-fit rounded-md">
            {isLoading
              ? Array.from({ length: 3 }).map((_, index) => (
                  <div
                    key={index}
                    className="w-20 h-8 bg-gray-300 rounded-md animate-pulse"
                  ></div>
                ))
              : tiposHabitacion.data.map((tipo) => (
                  <Button
                    key={tipo.id}
                    size="sm"
                    variant={
                      habitacionSeleccionada?.id === tipo.id
                        ? "default"
                        : "ghost"
                    }
                    onClick={() => setHabitacionSeleccionada(tipo)}
                    className="px-4"
                  >
                    {tipo.nombre}
                  </Button>
                ))}
          </div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          {isLoading ? (
            <div className="w-full h-[400px] bg-gray-300 rounded-md animate-pulse"></div>
          ) : (
            <Carousel
              className="w-full mb-4"
              opts={{
                loop: true,
              }}
            >
              <CarouselContent>
                {habitacionSeleccionada?.imagenes.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative h-[600px] w-full cursor-pointer">
                      <Image
                        src={image.url || "/placeholder.svg"}
                        alt={`${habitacionSeleccionada?.nombre} - Imagen ${
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
          )}
        </div>
      </section>
    </main>
  );
}
