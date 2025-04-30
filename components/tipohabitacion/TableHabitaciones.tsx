"use client";

import { format } from "date-fns";
import useReservaStore from "../reserva/lib/reserva.store";
import { HabitacionDisponibleResponseData } from "./lib/habitaciondisponible.interface";
import { Button } from "../ui/button";
import Link from "next/link";

interface Props {
    room: HabitacionDisponibleResponseData;
}

export default function TableHabitaciones({ room }: Props) {
    const { dateFrom, dateTo } = useReservaStore();
    return (
        <div className="container mx-auto px-4 max-w-6xl mt-16">
            <h2 className="text-2xl font-bold mb-4">Habitaciones Disponibles</h2>
            <p className="mb-4 text-gray-600">
                Rango de fechas: {format(dateFrom, "dd/MM/yyyy")} -{" "}
                {format(dateTo, "dd/MM/yyyy")}
            </p>
            <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
                <thead>
                    <tr className="bg-gray-100 text-gray-700 uppercase text-sm leading-normal">
                        <th className="py-3 px-4 text-left">Número</th>
                        <th className="py-3 px-4 text-left">Situación</th>
                        <th className="py-3 px-4 text-left">Piso</th>
                        <th className="py-3 px-4 text-left">Check-in</th>
                        <th className="py-3 px-4 text-left">Check-out</th>
                        <th className="w-fit"></th>
                    </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                    {room.habitaciones.map((habitacion) => (
                        <tr
                            key={habitacion.id}
                            className="border-b border-gray-200 hover:bg-gray-100"
                        >
                            <td className="py-3 px-4">{habitacion.numero}</td>
                            <td className="py-3 px-4">{habitacion.situacion}</td>
                            <td className="py-3 px-4">{habitacion.piso}</td>
                            <td className="py-3 px-4">{format(dateFrom, "dd/MM/yyyy")}</td>
                            <td className="py-3 px-4">{format(dateTo, "dd/MM/yyyy")}</td>
                            <td className="py-3 px-4">
                                <Link href={`/habitaciones/${room.tipohabitacion.id}/reservar`}>
                                    <Button>Reservar Ahora</Button>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="mt-4 text-right"></div>
        </div>
    );
}
