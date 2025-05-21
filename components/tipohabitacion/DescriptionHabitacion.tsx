import {CircleCheck} from "lucide-react";
import {HabitacionDisponibleResponseData} from "./lib/habitaciondisponible.interface";
import Link from "next/link";

interface Props {
    room: HabitacionDisponibleResponseData;
    date: string;
}

export default function DescriptionHabitacion({room, date}: Props) {
    return (
        <div className="w-full lg:w-1/2">
            <div className="uppercase text-xs font-poppins font-semibold tracking-widest text-hotel-gray mb-2">
                HABITACIONES
            </div>
            <h2 className="text-4xl font-playfair mb-8">
                {room.tipohabitacion.nombre}
            </h2>
            {/* Room Description */}
            <div className="mt-8">
                <p className="text-gray-700 leading-relaxed">
                    {room.tipohabitacion.descripcion.join(" ")}
                </p>
            </div>
            <div className="py-8">
                {/* Amenities */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                    {room.tipohabitacion.descripcion.map((amenity, index) => (
                        <div key={index} className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center mr-2">
                                <CircleCheck className="h-4 w-4 text-white"/>
                            </div>
                            <span className="text-sm uppercase font-semibold">{amenity}</span>
                        </div>
                    ))}
                </div>

                {/* Reserve Button */}
                <Link
                    href={`/habitaciones/${date}/${room.tipohabitacion.id}/reservar`}
                    className="block w-full bg-[#74562e] text-white py-3 px-4 rounded-md text-center uppercase tracking-wider font-medium hover:bg-[#5c4523] transition-colors"
                >
                    Reservar ahora
                </Link>
            </div>
        </div>
    );
}
