"use client";
import BookDates from "@/components/book-dates";
import Hero from "@/components/hero";
import AboutUs from "@/components/about-us";
import Experience from "@/components/experience";
import Rooms from "@/components/rooms";
import Contact from "@/components/contact";
import MetodosPago from "@/components/metodos-pago";
import { getTiposHabitacion } from "@/components/tipohabitacion/lib/tipohabitacion.actions";
import { useEffect, useState } from "react";
import { TipoHabitacionResponse } from "@/components/tipohabitacion/lib/tipohabitacion.interface";

export default function Home() {
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
    <main className="">
      {/* Hero Section */}
      <Hero />

      {/* Booking Form */}
      <BookDates tiposHabitacion={tiposHabitacion} />

      {/* About Us Section */}
      <AboutUs />

      {/* Experience Section */}
      <Experience />

      {/* Rooms Section */}
      <Rooms tiposHabitacion={tiposHabitacion} />

      {/* Contact Section */}
      <Contact />

      <MetodosPago />
    </main>
  );
}
