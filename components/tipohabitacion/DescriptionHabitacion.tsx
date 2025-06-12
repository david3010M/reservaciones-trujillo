import * as LucideReact from "lucide-react";
import { HabitacionDisponibleResponseData } from "./lib/habitaciondisponible.interface";
import { AmenitiesResponse } from "./lib/amenities.interface";

interface Props {
  room: HabitacionDisponibleResponseData;
  date: string;
  amenities: AmenitiesResponse | null;
}

export default function DescriptionHabitacion({ room, amenities }: Props) {
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
          {amenities?.data.map((amenity, index) => {
            const Icon = LucideReact[amenity.icon] as React.ComponentType<any>;
            return (
              <div key={index} className="flex items-center">
                <div className="w-8 h-8 aspect-square rounded-full bg-primary flex items-center justify-center mr-2">
                  <Icon className="h-4 w-4 text-white" />
                </div>
                <span className="text-sm uppercase font-semibold">
                  {amenity.nombre}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
