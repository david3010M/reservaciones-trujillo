"use client";

import { getTipoHabitacion } from "@/components/tipohabitacion/lib/tipohabitacion.actions";
import { TipoHabitacionShowResponse } from "@/components/tipohabitacion/lib/tipohabitacion.interface";
import Image from "next/image";
import Link from "next/link";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ConfirmacionPage({ params }: PageProps) {
  const { id } = await params;
  const data: TipoHabitacionShowResponse | null = await getTipoHabitacion(id);
  const room = data?.data;

  if (!room) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-playfair mb-4">
            Habitación no encontrada
          </h1>
          <Link href="/habitaciones" className="text-[#d69c4f] hover:underline">
            Volver a habitaciones
          </Link>
        </div>
      </div>
    );
  }

  // Generar un número de reserva aleatorio
  const reservationNumber = Math.floor(1000 + Math.random() * 9000);

  // Calcular fechas de ejemplo para la reserva
  const today = new Date();
  const checkIn = new Date(today);
  checkIn.setDate(today.getDate() + 7); // Una semana después
  const checkOut = new Date(checkIn);
  checkOut.setDate(checkIn.getDate() + 4); // 4 noches de estancia

  const formatDate = (date: Date) => {
    return `${date.getDate()} Marzo ${date.getFullYear()}`;
  };

  return (
    <main className="min-h-screen">

      {/* Confirmation Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex flex-col md:flex-row items-baseline gap-2 mb-2">
            <h1 className="text-2xl md:text-3xl font-playfair">
              El estado de tu reserva
            </h1>
            <h2 className="text-2xl md:text-3xl font-playfair text-[#d69c4f]">
              Confirmada
            </h2>
          </div>

          <p className="text-gray-600 mb-8">
            Comuníquese con EasySet24 si necesita cambiar la información básica
            con el número de reserva {reservationNumber}.
          </p>

          <div className="border border-gray-200 rounded-md overflow-hidden mb-8">
            {/* Banner */}
            <div className="relative h-48 bg-black">
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h3 className="text-3xl md:text-4xl font-playfair tracking-wider mb-4">
                  RECEPCIONES TRUJILLO
                </h3>
                <p className="text-sm md:text-base tracking-widest">
                  HABITACIONES Y EVENTOS INOLVIDABLES
                </p>
              </div>
            </div>

            {/* Reservation Info */}
            <div className="bg-gray-100 p-4">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                <h3 className="text-lg font-playfair mb-2 md:mb-0">
                  Recepciones Trujillo - {room.nombre}
                </h3>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex items-center">
                    <span className="text-sm">
                      Ingreso: 11:00am - {formatDate(checkIn)}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm">
                      Salida: 18:00pm - {formatDate(checkOut)}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Reservation Details Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="py-3 px-4 text-left">Noches</th>
                    <th className="py-3 px-4 text-left">Check-In</th>
                    <th className="py-3 px-4 text-left">Check-out</th>
                    <th className="py-3 px-4 text-left">Cantidad</th>
                    <th className="py-3 px-4 text-left">Tipo de habitación</th>
                    <th className="py-3 px-4 text-left">Tipo de cama</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-4">4 Noches</td>
                    <td className="py-4 px-4">17 Mar 2025</td>
                    <td className="py-4 px-4">21 Mar 2025</td>
                    <td className="py-4 px-4">1 Habitación</td>
                    <td className="py-4 px-4">Simple</td>
                    <td className="py-4 px-4">2 Plazas</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Guest Info */}
            <div className="p-4 border-t border-gray-200">
              <p className="font-medium">Adultos 1</p>
            </div>
          </div>

          {/* Cancellation Policy */}
          <div className="mb-8">
            <h3 className="text-xl font-playfair mb-4">
              Política De Cancelación
            </h3>
            <h4 className="font-medium mb-2">Prestar Atención</h4>
            <p className="text-gray-600">
              Esta reserva constituye el paso final del proceso de reserva del
              hotel. Se considera definitiva y el hotel solo podrá cancelarla en
              caso de circunstancias imprevistas o desastres naturales.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="bg-[#d69c4f] text-white py-3 px-6 rounded-md text-center"
            >
              Volver al inicio
            </Link>
            <button
              className="border border-[#d69c4f] text-[#d69c4f] py-3 px-6 rounded-md"
            >
              Imprimir confirmación
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
