import Title from "@/components/title";
import { getHabitacionDisponible } from "@/components/tipohabitacion/lib/tipohabitacion.actions";
import { HabitacionDisponibleResponse } from "@/components/tipohabitacion/lib/habitaciondisponible.interface";
import MainCarousel from "@/components/tipohabitacion/MainCarousel";
import DescriptionHabitacion from "@/components/tipohabitacion/DescriptionHabitacion";
import HabitacionNotFound from "@/components/tipohabitacion/HabitacionNotFound";
import TablaHabitacionesDisponible from "@/components/tipohabitacion/TablaHabitacionesDisponibles";

export const dynamic = "force-dynamic";

interface PageProps {
  params: Promise<{ id: string; date: string }>;
}

export default async function RoomDetailPage({ params }: PageProps) {
  const { id, date } = await params;

  if (!id || !date) {
    return <HabitacionNotFound />;
  }

  const data: HabitacionDisponibleResponse | null =
    await getHabitacionDisponible({
      fechaDesde: date,
      idTipoHabitacion: Number(id),
    });

  const room = data?.data[id];

  if (!data || !data.status) {
    return <HabitacionNotFound />;
  }

  return (
    <main className="min-h-screen bg-white">
      <Title
        title="Habitaciones"
        description="Ofrecemos habitaciones diseñadas para brindar comodidad, privacidad y una experiencia de estadía excepcional, adaptándose a las necesidades de cada huésped."
      />
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-12">
            <MainCarousel room={room} />
            <DescriptionHabitacion date={date} room={room} />
          </div>
          <TablaHabitacionesDisponible room={room} date={date} />
        </div>
        {/* <div className="container">
          <TableHabitaciones room={room} />
        </div> */}
      </section>
    </main>
  );
}
