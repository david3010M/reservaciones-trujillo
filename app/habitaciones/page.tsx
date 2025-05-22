"use client";

import Title from "@/components/title";
import useHabitacionStore from "@/components/tipohabitacion/lib/tipohabitacion.store";
import { HabitacionDisponibleResponseData } from "@/components/tipohabitacion/lib/habitaciondisponible.interface";
import Busqueda from "@/components/habitaciones/Busqueda";
import HabitacionItem from "@/components/habitaciones/HabitacionItem";
import HabitacionSkeleton from "@/components/habitaciones/HabitacionSkeleton";
import useReservaStore from "@/components/reserva/lib/reserva.store";
import { format } from "date-fns";

export default function HabitacionesPage() {
  const { habitaciones, loading } = useHabitacionStore();
  const { dateFrom } = useReservaStore();

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
            <Busqueda />

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-8 lg:w-2/3">
              {/* Rooms */}
              {loading
                ? Array.from({ length: 4 }).map((_, idx) => (
                    <HabitacionSkeleton key={idx} />
                  ))
                : Object.entries(habitaciones.data).map(([key, room]) => (
                    <HabitacionItem
                      key={key}
                      dateFrom={format(dateFrom, "yyyy-MM-dd")}
                      room={room as HabitacionDisponibleResponseData}
                    />
                  ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
