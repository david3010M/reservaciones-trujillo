import Image from "next/image";
import {HabitacionDisponibleResponseData} from "../tipohabitacion/lib/habitaciondisponible.interface";
import {ChevronRight, CircleDot, Users} from "lucide-react";
import Link from "next/link";
import {BASE_URL} from "@/lib/config";

interface Props {
    room: HabitacionDisponibleResponseData;
    dateFrom: string;
}


export default function HabitacionItem(
    {
        room,
        dateFrom,
    }: Props) {
    return (
        <div className="border-2 border-hotel-beige overflow-hidden bg-white">
            <div className="relative h-48">
                <Image
                    src={
                        room.tipohabitacion.imagenes[0]?.url
                            ? BASE_URL + "/" + room.tipohabitacion.imagenes[0]?.url
                            : "/placeholder.svg"
                    }
                    alt={
                        room.tipohabitacion.imagenes[0]?.tipohabitacion_id.toString() ?? ""
                    }
                    fill
                    className="object-cover"
                />
            </div>
            <div className="p-6">
                <h3 className="text-xl font-lato tracking-wider text-hotel-darkGray mb-2">
                    {room.tipohabitacion.nombre}
                </h3>
                <div className="flex items-center mb-4 text-sm text-gray-500">
                    <Users className="h-4 w-4 mr-1"/>
                    <span>{room.tipohabitacion.capacidad}</span>
                </div>
                <p className="text-sm mb-6">
                    {room.tipohabitacion.descripcion.join(", ")}
                </p>
                <Link
                    href={"/habitaciones/" + dateFrom + "/" + room.tipohabitacion.id}
                    className="block w-full border border-hotel-gold text-hotel-gold py-2 px-4 rounded-md hover:bg-hotel-gold hover:text-white transition-colors mb-6 text-center"
                >
                    RESERVAR AHORA
                </Link>
                <div className="flex flex-col justify-between border-t pt-4">
                    <div className="flex space-x-4">
                        {room.tipohabitacion.descripcion.map((amenitie, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                                <CircleDot className="h-5 w-5 text-gray-400"/>
                                <span key={idx} className="text-sm text-gray-500">
                                  {amenitie}
                               </span>
                            </div>
                        ))}
                    </div>
                    <Link
                        href={"/habitaciones/" + dateFrom + "/" + room.tipohabitacion.id}
                        className="text-xs text-hotel-gold flex items-center"
                    >
                        VER MÁS <ChevronRight className="h-3 w-3 ml-1"/>
                    </Link>
                </div>
            </div>
        </div>
    );
}
