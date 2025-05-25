"use client";

import {HabitacionDisponibleResponseData} from "./lib/habitaciondisponible.interface";
import useReservaStore from "../reserva/lib/reserva.store";
import {useRouter} from "next/navigation";
import {Button} from "../ui/button";
import {Habitacione} from "./lib/habitacionesdisponible.interface";

interface Props {
    room: HabitacionDisponibleResponseData;
    date: string;
    dateTo: string;
}

export default function TablaHabitacionesDisponible({room, date, dateTo}: Props) {
    const router = useRouter();
    const {setHabitacionId} = useReservaStore();

    const handleReserva = (habitacion: number) => {
        setHabitacionId(habitacion);
        router.push(`/habitaciones/${date}/${dateTo}/${room.tipohabitacion.id}/reservar`);
    };

    const habitacionesPorPiso = room.habitaciones.reduce<
        Record<string, Habitacione[]>
    >((acc, hab) => {
        if (!acc[hab.piso]) acc[hab.piso] = [];
        acc[hab.piso].push(hab);
        return acc;
    }, {});

    return (
        <div className="w-full space-y-10">
            {Object.entries(habitacionesPorPiso).map(([piso, habitaciones]) => (
                <div key={piso}>
                    <h2 className="text-2xl font-bold text-hotel-brown mb-4">
                        {piso}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {habitaciones.map((habitacion) => (
                            <div
                                key={habitacion.id}
                                className="border rounded-lg p-4 shadow-md bg-white flex flex-col gap-2"
                            >
                                <div className="text-lg font-semibold">
                                    N° {habitacion.numero}
                                </div>
                                {/* <div className="text-sm text-gray-600">
                  Situación: {habitacion.situacion}
                </div> */}
                                <Button
                                    className="bg-hotel-brown mt-2"
                                    onClick={() => handleReserva(habitacion.id)}
                                >
                                    Reservar ahora
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
