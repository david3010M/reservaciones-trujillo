import Image from "next/image";

export default function Rooms() {
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
          <RenderRoomCard
            title="Habitación Simple"
            description="Ideal para viajeros individuales que buscan confort y funcionalidad"
            imageSrc="/home/simple.png"
          />
          <RenderRoomCard
            title="Habitación Doble"
            description="Habitación con dos camas, baño privado, TV, internet y comodidades."
            imageSrc="/home/doble.jpg"
          />
          <RenderRoomCard
            title="Habitación Matrimonial"
            description="Habitación con cama matrimonial, TV, internet, confort y comodidades."
            imageSrc="/home/matrimonial.jpg"
          />
        </div>
      </div>
    </section>
  );
}

function RenderRoomCard({
  title,
  description,
  imageSrc,
}: {
  title: string;
  description: string;
  imageSrc: string;
}) {
  return (
    <div className="rounded-md overflow-hidden border border-gray-200">
      <div className="relative h-80">
        <Image src={imageSrc} alt={title} fill className="object-cover" />
        <div className="m-2 p-2 bg-white/70 absolute bottom-0 rounded-lg">
          <h3 className="text-xl font-playfair mb-1">{title}</h3>
          <p className="text-xs">{description}</p>
        </div>
      </div>
    </div>
  );
}
