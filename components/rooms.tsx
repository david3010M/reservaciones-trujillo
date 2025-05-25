import Image from "next/image";
import { TipoHabitacionResponse } from "./tipohabitacion/lib/tipohabitacion.interface";
import RenderRoomCard from "./RoomCard";

interface Props {
  tiposHabitacion: TipoHabitacionResponse;
}

export default function Rooms({ tiposHabitacion }: Props) {
  return (
    <section className="py-16 bg-hotel-lightBeige">
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="flex items-center mb-4 gap-2 md:px-8">
          <Image
            src={"/icons/arrow-right.svg"}
            alt="arrow-right"
            width={36}
            height={36}
          ></Image>
          <span className="text-[#d69c4f] uppercase text-sm">Habitaciones</span>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-16 mb-8 md:px-8">
          <h2 className="text-3xl font-playfair">
            NUESTRAS
            <br />
            HABITACIONES
          </h2>
          <p className="text-sm text-gray-500 text-justify">
            Nuestras habitaciones ofrecen una combinación armoniosa de comodidad
            y elegancia, diseñadas para brindar una estancia excepcional a cada
            huésped. Cada habitación cuenta con ropa de cama de lujo, sábanas de
            alta calidad y una selección de almohadas para garantizar un sueño
            reparador.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiposHabitacion.data.length > 0 ? (
            tiposHabitacion.data.map((tipo) => (
              <RenderRoomCard
                key={tipo.id}
                id={tipo.id}
                title={tipo.nombre}
                description={tipo.descripcion.join(", ")}
                imageSrc={tipo.imagenes[0]?.url ?? "/placeholder.svg"}
              />
            ))
          ) : (
            <>
              {Array.from({ length: 3 }).map((_, idx: number) => (
                <RoomCardSkeleton key={idx} />
              ))}
            </>
          )}
        </div>
      </div>
    </section>
  );
}

function RoomCardSkeleton() {
  return (
    <div className="rounded-md relative overflow-hidden border border-gray-200 animate-pulse">
      <div className="relative h-80 bg-hotel-beige"></div>
      <div className="p-2 absolute bottom-0 w-full">
        <div className="p-2 bg-white/70 rounded-lg w-full">
          <h3 className="text-xl font-playfair mb-1 bg-hotel-beige h-4 w-1/2"></h3>
          <p className="text-xs bg-hotel-beige h-4 w-full"></p>
        </div>
      </div>
    </div>
  );
}
