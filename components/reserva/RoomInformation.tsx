"use client";

import { CheckCircle } from "lucide-react";
import Image from "next/image";
import { BASE_URL } from "@/lib/config";
import { HabitacionesDisponibleResponseData } from "../tipohabitacion/lib/habitacionesdisponible.interface";

interface Props {
  room: HabitacionesDisponibleResponseData;
}

export default function RoomInformation({ room }: Props) {
  const valoracion = 4.3; // Valoración de ejemplo, puedes cambiarlo según tus necesidades
  return (
    <div className="md:col-span-2">
      <div className="overflow-hidden flex">
        {/* Room Images */}
        <div className="grid grid-cols-1 gap-4 mt-1 w-1/4">
          {room.tipohabitacion.imagenes.map((image, index) => (
            <div
              className="relative aspect-square w-full rounded overflow-hidden"
              key={index}
            >
              <Image
                src={
                  image.url ? `${BASE_URL}/${image.url}` : "/placeholder.jpg"
                }
                alt={`${room.tipohabitacion.nombre} - vista 2`}
                fill
                className="object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/placeholder.jpg";
                }}
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 w-3/4 p-4">
          {/* Room Name and Rating */}
          <div className="grid gap-3">
            <h2 className="text-xl font-poppins font-bold">
              {room.tipohabitacion.nombre}
            </h2>
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
                style={{ width: `${valoracion * 20}%` }}
              ></div>
            </div>
          </div>

          {/* Amenities */}
          <div className="">
            {room.tipohabitacion.descripcion.map((amenity, index) => (
              <div
                key={index}
                className="flex items-center py-1 border-b border-gray-100"
              >
                <div className="mr-3">
                  <CheckCircle className="h-5 w-5 text-hotel-gold" />
                </div>
                <span className="text-sm">{amenity}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
