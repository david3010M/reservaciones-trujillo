"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Wifi,
  Tv,
  Coffee,
  Bath,
  Users,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import Title from "@/components/title";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { useEffect, useState } from "react";
import { format, parse } from "date-fns";
import { es } from "date-fns/locale";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
import useReservaStore from "@/components/reserva/lib/reserva.store";

const amenitiesIcons = [
  { Icon: Wifi, label: "Wifi" },
  { Icon: Tv, label: "Tv" },
  { Icon: Coffee, label: "Coffee" },
  { Icon: Bath, label: "Bath" },
];

const rooms = [
  {
    title: "Habitación Simple",
    description:
      "Ideal para viajeros individuales que buscan confort y funcionalidad.",
    capacity: "1 PERSONA",
    link: "/habitaciones/simple",
    imageAlt: "Habitación Simple",
    imageSrc: "/habitaciones/simple.png",
  },
  {
    title: "Habitación Doble",
    description:
      "Perfecta para amigos o familiares que desean compartir su estadía sin perder privacidad.",
    capacity: "4 PERSONAS",
    link: "/habitaciones/doble",
    imageAlt: "Habitación Doble",
    imageSrc: "/habitaciones/doble.png",
    badge: "ONLY 4 ROOMS LEFT AT THIS PRICE",
  },
  {
    title: "Habitación Matrimonial",
    description: "Opción ideal para parejas que buscan comodidad y privacidad.",
    capacity: "2 PERSONAS",
    link: "/habitaciones/matrimonial",
    imageAlt: "Habitación Matrimonial",
    imageSrc: "/habitaciones/matrimonial.png",
  },
];

export default function HabitacionesPage() {
  const { dateFrom, dateTo, setDateFrom, setDateTo } = useReservaStore();
  const [peopleCount, setPeopleCount] = useState(1);

  useEffect(() => {
    const storedDateFrom = localStorage.getItem("dateFrom");
    const storedDateTo = localStorage.getItem("dateTo");

    if (storedDateFrom) {
      setDateFrom(parse(storedDateFrom, "yyyy-MM-dd", new Date()));
    }
    if (storedDateTo) {
      setDateTo(parse(storedDateTo, "yyyy-MM-dd", new Date()));
    }
  }, [setDateFrom, setDateTo]);

  return (
    <main className="min-h-screen">
      {/* Habitaciones Header */}
      <Title
        title="Habitaciones"
        description=" Ofrecemos habitaciones diseñadas para brindar comodidad, privacidad
            y una experiencia de estadía excepcional, adaptándose a las
            necesidades de cada huésped."
      />

      {/* Rooms Section */}
      <section className="py-8 md:py-16">
        <div className="container max-w-screen-lg mx-auto px-4">
          <h2 className="text-xl md:text-3xl font-poppins font-semibold mb-8 md:mb-12">
            Conoce nuestras habitaciones
          </h2>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="bg-hotel-beige p-6 lg:w-1/3 h-fit">
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-4 font-lato place-items-center">
                {["Ingreso", "Salida"].map((label, idx) => (
                  <Popover key={idx}>
                    <PopoverTrigger asChild className="w-full aspect-square">
                      <Button className="w-full h-fit min-w-16 max-w-32 rounded-none p-1 sm:p-4 flex flex-col items-center gap-0.5 sm:gap-4 aspect-square">
                        <span className="block text-[9px] sm:text-xs uppercase tracking-widest">
                          {label}
                        </span>
                        {idx === 0 && dateFrom ? (
                          <div className="flex gap-2">
                            <span className="text-6xl font-thin">
                              {format(dateFrom, "dd", { locale: es })}
                            </span>
                            <div className="flex flex-col items-center justify-center">
                              <span className="text-sm">
                                {format(dateFrom, "MMM", { locale: es })
                                  .charAt(0)
                                  .toUpperCase() +
                                  format(dateFrom, "MMM", {
                                    locale: es,
                                  }).slice(1)}
                              </span>
                              <ChevronDown className="max-h-3 max-w-3" />
                            </div>
                          </div>
                        ) : idx === 1 && dateTo ? (
                          <div className="flex gap-2">
                            <span className="text-6xl font-thin">
                              {format(dateTo, "dd", { locale: es })}
                            </span>
                            <div className="flex flex-col items-center justify-center">
                              <span className="text-sm">
                                {format(dateTo, "MMM", { locale: es })
                                  .charAt(0)
                                  .toUpperCase() +
                                  format(dateTo, "MMM", {
                                    locale: es,
                                  }).slice(1)}
                              </span>
                              <ChevronDown className="max-h-3 max-w-3" />
                            </div>
                          </div>
                        ) : (
                          <span className="text-sm">Selecciona una fecha</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        fromDate={new Date()}
                        mode="range"
                        selected={{ from: dateFrom, to: dateTo }}
                        onSelect={(range) => {
                          if (range?.from) setDateFrom(range.from);
                          if (range?.to) setDateTo(range.to);
                        }}
                        initialFocus
                        numberOfMonths={2}
                      />
                    </PopoverContent>
                  </Popover>
                ))}

                <div className="bg-primary text-primary-foreground w-full h-fit min-w-16 min-h-16 max-w-32 max-h-32 rounded-none p-1 sm:p-4 flex flex-col items-center justify-center gap-0.5 sm:gap-4 aspect-square">
                  <span className="block text-[9px] sm:text-xs uppercase tracking-widest">
                    Personas
                  </span>
                  <div className="flex gap-2">
                    <span className="text-6xl font-thin">{peopleCount}</span>
                    <div className="flex flex-col gap-2 items-center justify-center">
                      <Button
                        size="icon"
                        onClick={() =>
                          setPeopleCount((prev) => Math.min(prev + 1, 10))
                        }
                        className="p-2 max-h-6 max-w-6"
                      >
                        <ChevronUp className="max-h-4 max-w-4" />
                      </Button>
                      <Button
                        size="icon"
                        onClick={() =>
                          setPeopleCount((prev) => Math.max(prev - 1, 1))
                        }
                        className="p-2 max-h-6 max-w-6"
                      >
                        <ChevronDown className="max-h-4 max-w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="bg-primary text-primary-foreground w-full h-fit min-w-16 min-h-16 max-w-32 max-h-32 rounded-none p-1 sm:p-4 flex flex-col items-center justify-center gap-0.5 sm:gap-4 aspect-square">
                  <span className="block text-[9px] sm:text-xs uppercase tracking-widest">
                    Noches
                  </span>
                  <span className="text-6xl font-thin">
                    {dateFrom && dateTo
                      ? Math.max(
                          1,
                          Math.ceil(
                            (dateTo.getTime() - dateFrom.getTime()) /
                              (1000 * 60 * 60 * 24)
                          )
                        )
                      : 0}
                  </span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-8 lg:w-2/3">
              {/* Booking Widget */}

              {/* Rooms */}
              {rooms.map((room, idx) => (
                <div
                  key={idx}
                  className="border-2 border-hotel-beige overflow-hidden bg-white"
                >
                  <div className="relative h-48">
                    <Image
                      src={room.imageSrc}
                      alt={room.imageAlt}
                      fill
                      className="object-cover"
                    />
                    {room.badge && (
                      <div className="absolute top-2 right-2 bg-white text-xs py-1 px-2 rounded">
                        {room.badge}
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-lato tracking-wider text-hotel-darkGray mb-2">
                      {room.title}
                    </h3>
                    <div className="flex items-center mb-4 text-sm text-gray-500">
                      <Users className="h-4 w-4 mr-1" />
                      <span>{room.capacity}</span>
                    </div>
                    <p className="text-sm mb-6">{room.description}</p>
                    <Link
                      href={room.link}
                      className="block w-full border border-hotel-gold text-hotel-gold py-2 px-4 rounded-md hover:bg-hotel-gold hover:text-white transition-colors mb-6 text-center"
                    >
                      RESERVAR AHORA
                    </Link>
                    <div className="flex justify-between border-t pt-4">
                      <div className="flex space-x-4">
                        {amenitiesIcons.map(({ Icon }, idx) => (
                          <Icon key={idx} className="h-5 w-5 text-gray-400" />
                        ))}
                      </div>
                      <Link
                        href={room.link}
                        className="text-xs text-hotel-gold flex items-center"
                      >
                        VER MÁS <ChevronRight className="h-3 w-3 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
