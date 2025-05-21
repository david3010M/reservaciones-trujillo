import Link from "next/link";
import { getTipoHabitacion } from "@/components/tipohabitacion/lib/tipohabitacion.actions";
import { TipoHabitacionShowResponse } from "@/components/tipohabitacion/lib/tipohabitacion.interface";
import ReservationForm from "@/components/reserva/ReservationForm";
import ReservationDetails from "@/components/reserva/ReservationDetails";
import RoomInformation from "@/components/reserva/RoomInformation";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ReservarPage({ params }: PageProps) {
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

  return (
    <main className="min-h-screen">
      {/* Reservation Form */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-lato font-bold mb-8">
            Gestionar tu reserva
          </h1>

          <div className="grid gap-8 grid-cols-1 grid-rows-[repeat(3,min-content)] md:grid-cols-5 md:grid-rows-[repeat(2,min-content)]">
            {/* Left Column - Room Info */}
            <RoomInformation room={room} />

            {/* Right Column - Reservation Form */}
            <ReservationForm id={id} room={room} />

            {/* Reservation Details Section */}
            <ReservationDetails room={room} />
          </div>
        </div>
      </section>
    </main>
  );
}
