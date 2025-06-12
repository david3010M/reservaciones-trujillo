import Link from "next/link";
import ReservationDetails from "@/components/salones/ReservationDetails";
import ReservationForm from "@/components/salones/ReservationForm";
import SalonInformation from "@/components/salones/SalonInformation";
import { getSalones } from "@/components/salones/lib/salon.actions";

export const dynamic = "force-dynamic";

interface PageProps {
  params: Promise<{ id: string; packageId: string }>;
}

export default async function ReservarPage({ params }: PageProps) {
  const { id, packageId } = await params;

  const salones = await getSalones();
  const salon = salones?.data.find((salon) => salon.id.toString() === id);
  const packageSalon = salon?.paquetes.find(
    (p) => p.id.toString() === packageId
  );

  if (!salon) {
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

  if (!packageSalon) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-playfair mb-4">Paquete no encontrado</h1>
          <Link href="/eventos" className="text-[#d69c4f] hover:underline">
            Volver a salones
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
            <SalonInformation salon={salon} />

            {/* Right Column - Reservation Form */}
            <ReservationForm packageSalon={packageSalon} id={id} />

            {/* Reservation Details Section */}
            <ReservationDetails packageSalon={packageSalon} salon={salon} />
          </div>
        </div>
      </section>
    </main>
  );
}
