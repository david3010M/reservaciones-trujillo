import Image from "next/image";
import Link from "next/link";
import {getReservaSalonByCode} from "@/components/salones/lib/salon.actions";
import {ReservaSalonCodeResponse} from "@/components/salones/lib/salon.interface";
import {Check} from "lucide-react";
import {Button} from "@/components/ui/button";

export const dynamic = "force-dynamic";

interface PageProps {
    params: Promise<{ packageId: string }>;
}

export default async function ConfirmacionPage({params}: PageProps) {
    const {packageId} = await params;
    const data: ReservaSalonCodeResponse | null = await getReservaSalonByCode(packageId);
    const packageSalon = data?.reserva_paquete.paquete;

    if (!packageSalon) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-playfair mb-4">
                        Reserva de Salon no encontrada
                    </h1>
                    <Link href="/eventos" className="text-[#d69c4f] hover:underline">
                        Volver a salones
                    </Link>
                </div>
            </div>
        );
    }


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
                        básica con el número de reserva {data?.reserva_paquete.id}.
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
                                        Recepciones Trujillo - {data?.reserva_paquete.paquete.nombre}
                                    </h3>
                                    <div className="flex flex-col md:flex-row gap-4">
                                        <div className="flex items-center">
                                          <span className="text-sm">
                                            Fecha de reserva: {data?.reserva_paquete.fechareserva}
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
                                    {/*<th className="py-3 px-4 center">Noches</th>*/}
                                    <th className="py-3 px-4 text-center">Fecha</th>
                                    <th className="py-3 px-4 text-center">Cantidad Personas</th>
                                    <th className="py-3 px-4 text-center">Tipo de paquete</th>
                                    <th className="py-3 px-4 text-center">Precio de paquete</th>
                                    <th className="py-3 px-4 text-center">Total</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr className="border-b border-gray-200">
                                    {/*<td className="py-4 px-4 text-center">{data?.reserva_paquete.}</td>*/}
                                    <td className="py-4 px-4 text-center">{data?.reserva_paquete.fechareserva}</td>
                                    <td className="py-4 px-4 text-center">{data?.reserva_paquete.nropersonas}</td>
                                    <td className="py-4 px-4 text-center">{data?.reserva_paquete.paquete.nombre}</td>
                                    <td className="py-4 px-4 text-center">{data?.reserva_paquete.paquete.precio}</td>
                                    <td className="py-4 px-4 text-center">{data?.reserva_paquete.total}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Guest Info */}
                        <div className="p-4 border-t border-gray-200">
                            <div className="flex gap-2">
                                <Check className="text-hotel-gold size-6"/>
                                <p className="font-medium">{data?.reserva_paquete.nropersonas} personas</p>
                            </div>
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
                        >
                            <Button variant="default" size="lg">
                                Volver al inicio
                            </Button>
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
