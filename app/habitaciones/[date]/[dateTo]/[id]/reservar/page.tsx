import Link from "next/link";
import { getHabitacionesDisponible } from "@/components/tipohabitacion/lib/tipohabitacion.actions";
import ReservationForm from "@/components/reserva/ReservationForm";
import ReservationDetails from "@/components/reserva/ReservationDetails";
import RoomInformation from "@/components/reserva/RoomInformation";
import { HabitacionesDisponibleResponse } from "@/components/tipohabitacion/lib/habitacionesdisponible.interface";
import StepIndicator from "@/components/step-indicator";

export const dynamic = "force-dynamic";

interface PageProps {
  params: Promise<{ id: string; date: string; dateTo: string }>;
}

export default async function ReservarPage({ params }: PageProps) {
  const { id, date, dateTo } = await params;
  const data: HabitacionesDisponibleResponse | null =
    await getHabitacionesDisponible({ fechaDesde: date, fechaHasta: dateTo });
  const room = data?.data[id];

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

  return (
    <main className="min-h-screen">
      {/* Reservation Form */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="pb-8">
            <div className="container mx-auto px-4">
              <StepIndicator currentStep={"reserva"} />
            </div>
          </div>
          <h1 className="text-3xl font-lato font-bold mb-8">
            Gestionar tu reserva
          </h1>

          <div className="grid gap-8 grid-cols-1 grid-rows-[repeat(3,min-content)] md:grid-cols-5 md:grid-rows-[repeat(2,min-content)]">
            {/* Left Column - Room Info */}
            <RoomInformation room={room} />

            {/* Right Column - Reservation Form */}
            <ReservationForm room={room} />

            {/* Reservation Details Section */}
            <ReservationDetails room={room} />
          </div>
        </div>
      </section>
    </main>
  );
}
