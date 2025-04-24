import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Wifi, Tv, Coffee, Bath, Users } from "lucide-react";
import Title from "@/components/title";

const amenitiesIcons = [
  { Icon: Wifi, label: "Wifi" },
  { Icon: Tv, label: "Tv" },
  { Icon: Coffee, label: "Coffee" },
  { Icon: Bath, label: "Bath" },
];

const rooms = [
  {
    title: "Habitación Simple",
    description:
      "Ideal para viajeros individuales que buscan confort y funcionalidad.",
    capacity: "1 PERSONA",
    link: "/habitaciones/simple",
    imageAlt: "Habitación Simple",
    imageSrc: "/habitaciones/simple.png",
  },
  {
    title: "Habitación Doble",
    description:
      "Perfecta para amigos o familiares que desean compartir su estadía sin perder privacidad.",
    capacity: "4 PERSONAS",
    link: "/habitaciones/doble",
    imageAlt: "Habitación Doble",
    imageSrc: "/habitaciones/doble.png",
    badge: "ONLY 4 ROOMS LEFT AT THIS PRICE",
  },
  {
    title: "Habitación Matrimonial",
    description: "Opción ideal para parejas que buscan comodidad y privacidad.",
    capacity: "2 PERSONAS",
    link: "/habitaciones/matrimonial",
    imageAlt: "Habitación Matrimonial",
    imageSrc: "/habitaciones/matrimonial.png",
  },
];

export default function HabitacionesPage() {
  return (
    <main className="min-h-screen">
      {/* Habitaciones Header */}
      <Title
        title="Habitaciones"
        description=" Ofrecemos habitaciones diseñadas para brindar comodidad, privacidad
            y una experiencia de estadía excepcional, adaptándose a las
            necesidades de cada huésped."
      />

      {/* Rooms Section */}
      <section className="py-16">
        <div className="container max-w-screen-lg mx-auto px-4">
          <h2 className="text-3xl font-poppins font-semibold mb-12">
            Conoce nuestras habitaciones
          </h2>

          <div className="flex gap-8">
            <div className="bg-hotel-beige p-6 w-1/3 h-fit">
              <div className="grid grid-cols-2 gap-4">
                {["Ingreso", "Salida", "Personas", "Noches"].map(
                  (label, idx) => (
                    <div
                      key={idx}
                      className="bg-hotel-gold p-4 text-white text-center"
                    >
                      <div className="uppercase text-xs mb-1">{label}</div>
                      <div className="text-4xl font-playfair">
                        {idx === 0 ? "17" : idx === 1 ? "18" : "1"}
                      </div>
                      {idx < 2 && <div className="uppercase text-xs">May</div>}
                      {idx < 3 && (
                        <ChevronRight className="mx-auto mt-1 h-4 w-4" />
                      )}
                    </div>
                  )
                )}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-2/3">
              {/* Booking Widget */}

              {/* Rooms */}
              {rooms.map((room, idx) => (
                <div
                  key={idx}
                  className="border-2 border-hotel-beige overflow-hidden bg-white"
                >
                  <div className="relative h-48">
                    <Image
                      src={room.imageSrc}
                      alt={room.imageAlt}
                      fill
                      className="object-cover"
                    />
                    {room.badge && (
                      <div className="absolute top-2 right-2 bg-white text-xs py-1 px-2 rounded">
                        {room.badge}
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-lato tracking-wider text-hotel-darkGray mb-2">
                      {room.title}
                    </h3>
                    <div className="flex items-center mb-4 text-sm text-gray-500">
                      <Users className="h-4 w-4 mr-1" />
                      <span>{room.capacity}</span>
                    </div>
                    <p className="text-sm mb-6">{room.description}</p>
                    <Link
                      href={room.link}
                      className="block w-full border border-hotel-gold text-hotel-gold py-2 px-4 rounded-md hover:bg-hotel-gold hover:text-white transition-colors mb-6 text-center"
                    >
                      RESERVAR AHORA
                    </Link>
                    <div className="flex justify-between border-t pt-4">
                      <div className="flex space-x-4">
                        {amenitiesIcons.map(({ Icon }, idx) => (
                          <Icon key={idx} className="h-5 w-5 text-gray-400" />
                        ))}
                      </div>
                      <Link
                        href={room.link}
                        className="text-xs text-hotel-gold flex items-center"
                      >
                        VER MÁS <ChevronRight className="h-3 w-3 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
