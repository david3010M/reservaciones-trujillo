"use client";

import {CheckCircle, ChevronDown} from "lucide-react";
import Image from "next/image";
import {TipoHabitacionShowData} from "../tipohabitacion/lib/tipohabitacion.interface";
import {BASE_URL} from "@/lib/config";
import {SalonResponseData} from "@/components/salones/lib/salon.interface";

interface Props {
    salon: SalonResponseData;
}

export default function SalonInformation({salon}: Props) {
    const valoracion = 4.3; // Valoración de ejemplo, puedes cambiarlo según tus necesidades
    return (
        <div className="md:col-span-2">
            <div className="overflow-hidden flex">
                {/* Room Images */}
                <div className="grid grid-cols-1 gap-4 mt-1 w-1/4">
                    <div
                        className="relative aspect-square w-full rounded overflow-hidden"
                    >
                        <Image
                            src={
                                salon.imagen ? `${BASE_URL}/${salon.imagen}` : "/placeholder.jpg"
                            }
                            alt={`${salon.titulo} - vista 2`}
                            fill
                            className="object-cover"
                            onError={(e) => {
                                (e.target as HTMLImageElement).src = "/placeholder.jpg";
                            }}
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-4 w-3/4 p-4">
                    {/* Room Name and Rating */}
                    <div className="grid gap-3">
                        <h2 className="text-xl font-poppins font-bold">{salon.titulo}</h2>
                        <div className="flex items-center justify-between w-3/5">
                            <span className="text-sm mr-2">Valoración</span>
                            {/* <ChevronDown className="h-4 w-4 mr-2" /> */}
                            <span className="bg-hotel-gold text-white text-xs px-2 py-1 rounded">
                4.3
              </span>
                        </div>
                        <div className="bg-hotel-gold/50 w-3/5 h-1.5 rounded-full overflow-hidden">
                            <div
                                className="bg-hotel-gold h-full"
                                style={{width: `${valoracion * 20}%`}}
                            ></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
