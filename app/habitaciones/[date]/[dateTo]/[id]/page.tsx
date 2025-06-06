import Title from "@/components/title";
import {
  getAmenities,
  getHabitacionDisponible,
} from "@/components/tipohabitacion/lib/tipohabitacion.actions";
import { HabitacionDisponibleResponse } from "@/components/tipohabitacion/lib/habitaciondisponible.interface";
import MainCarousel from "@/components/tipohabitacion/MainCarousel";
import DescriptionHabitacion from "@/components/tipohabitacion/DescriptionHabitacion";
import HabitacionNotFound from "@/components/tipohabitacion/HabitacionNotFound";
import TablaHabitacionesDisponible from "@/components/tipohabitacion/TablaHabitacionesDisponibles";
import { AmenitiesResponse } from "@/components/tipohabitacion/lib/amenities.interface";
import TermsAndConditions from "@/components/TermsAndConditions";
import StepIndicator from "@/components/step-indicator";

export const dynamic = "force-dynamic";

interface PageProps {
  params: Promise<{ id: string; date: string; dateTo: string }>;
}

export default async function RoomDetailPage({ params }: PageProps) {
  const { id, date, dateTo } = await params;

  if (!id || !date || !dateTo) {
    return <HabitacionNotFound />;
  }

  const data: HabitacionDisponibleResponse | null =
    await getHabitacionDisponible({
      fechaDesde: date,
      fechaHasta: dateTo,
      idTipoHabitacion: Number(id),
    });

  const amenities: AmenitiesResponse | null = await getAmenities(id);

  const room = data?.data[id];

  if (!data || !data.status || !room) {
    return <HabitacionNotFound />;
  }

  return (
    <main className="min-h-screen bg-white">
      <Title
        title="Habitaciones"
        description="Ofrecemos habitaciones diseñadas para brindar comodidad, privacidad y una experiencia de estadía excepcional, adaptándose a las necesidades de cada huésped."
      />
      <div className="py-8">
        <div className="container mx-auto px-4">
          <StepIndicator currentStep={"buscar"} />
        </div>
      </div>
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-12">
            <MainCarousel room={room} />
            <DescriptionHabitacion
              date={date}
              room={room}
              amenities={amenities}
            />
          </div>
          <TablaHabitacionesDisponible
            room={room}
            date={date}
            dateTo={dateTo}
          />
          <TermsAndConditions />
        </div>
        {/* <div className="container">
          <TableHabitaciones room={room} />
        </div> */}
      </section>
    </main>
  );
}
