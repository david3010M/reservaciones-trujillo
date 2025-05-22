import { getReservaByCode } from "@/components/reserva/lib/reserva.actions";
import { ReservaByCodeResponse } from "@/components/reserva/lib/reserva.interface";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { es } from "date-fns/locale";

export const dynamic = "force-dynamic";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ConfirmacionPage({ params }: PageProps) {
  const { id } = await params;
  const data: ReservaByCodeResponse | null = await getReservaByCode(id);
  const room = data?.reserva.habitacion[0];

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

  const formatDate = (date: Date) => {
    return format(date, "dd MMMM yyyy", { locale: es });
  };

  return (
    <main className="min-h-screen">
      {/* Confirmation Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <div className="flex flex-col md:flex-row items-baseline gap-2 mb-2">
            <h1 className="text-xl md:text-2xl font-poppins font-bold">
              El estado de tu reserva
            </h1>
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-[#d69c4f]">
              Confirmada
            </h2>
          </div>

          <p className="text-gray-600 mb-8">
            Comuníquese con el administrador si necesita cambiar la información
            básica con el número de reserva {data?.reserva.id}.
          </p>

          <div className="border border-gray-200 rounded-md overflow-hidden mb-8 pb-8">
            {/* Banner */}
            <div className="flex flex-col">
              <div className="flex w-full justify-center bg-black">
                <Image
                  src="/reserva/confirmacion.png"
                  alt="Banner"
                  width={500}
                  height={400}
                  className="object-cover !mb-0"
                />
              </div>

              {/* Reservation Info */}
              {/* <div className="p-4 !text-white bg-black">
                <div className="flex flex-col justify-between items-center md:items-start mb-2">
                  <h3 className="text-lg font-poppins font-semibold mb-2 md:mb-0">
                    Recepciones Trujillo - {room.tipohabitacion.nombre}
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
              </div> */}
              <div className="p-4 !text-white bg-black">
                <div className="flex flex-col justify-between items-center md:items-start mb-2">
                  <h3 className="text-lg font-poppins font-semibold mb-2 md:mb-0">
                    Recepciones Trujillo - {room.tipohabitacion.nombre}
                  </h3>
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex items-center">
                      <span className="text-sm">
                        Fecha de reserva: {formatDate(new Date())}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Reservation Details Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#A6A6A6] text-white">
                    <th className="py-3 px-4 center">Noches</th>
                    <th className="py-3 px-4 text-center">Check-In</th>
                    <th className="py-3 px-4 text-center">Cantidad Personas</th>
                    <th className="py-3 px-4 text-center">
                      Tipo de habitación
                    </th>
                    <th className="py-3 px-4 text-center">Habitación</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.reserva.habitacion.map((habitacion, idx) => (
                    <tr
                      className="border-b border-gray-200"
                      key={habitacion.habitacion_id || idx}
                    >
                      <td className="py-4 px-4 text-center">
                        {data.reserva.dias}
                      </td>
                      <td className="py-4 px-4 text-center">
                        {data.reserva.fechareserva}
                      </td>
                      <td className="py-4 px-4 text-center">
                        {data.reserva.nropersonas}
                      </td>
                      <td className="py-4 px-4 text-center">
                        {habitacion.tipohabitacion.nombre}
                      </td>
                      <td className="py-4 px-4 text-center">
                        {habitacion.numero}
                      </td>
                    </tr>
                  ))}
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
            <h3 className="text-xl font-poppins font-bold mb-4">
              Política De Cancelación
            </h3>
            <h4 className="font-medium font-poppins mb-2">Prestar Atención</h4>
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
            {/*<button className="border border-[#d69c4f] text-[#d69c4f] py-3 px-6 rounded-md">*/}
            {/*    Imprimir confirmación*/}
            {/*</button>*/}
          </div>
        </div>
      </section>
    </main>
  );
}
