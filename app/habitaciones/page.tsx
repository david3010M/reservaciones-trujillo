import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Wifi, Tv, Coffee, Bath, Users } from "lucide-react";
import Title from "@/components/title";

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
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair mb-12">
            Conoce nuestras habitaciones
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Booking Widget */}
            <div className="bg-[#fae9d1] p-6 rounded-md">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#d69c4f] p-4 text-white text-center">
                  <div className="uppercase text-xs mb-1">Ingreso</div>
                  <div className="text-4xl font-playfair">17</div>
                  <div className="uppercase text-xs">May</div>
                  <ChevronRight className="mx-auto mt-1 h-4 w-4" />
                </div>
                <div className="bg-[#d69c4f] p-4 text-white text-center">
                  <div className="uppercase text-xs mb-1">Salida</div>
                  <div className="text-4xl font-playfair">18</div>
                  <div className="uppercase text-xs">May</div>
                  <ChevronRight className="mx-auto mt-1 h-4 w-4" />
                </div>
                <div className="bg-[#d69c4f] p-4 text-white text-center">
                  <div className="uppercase text-xs mb-1">Personas</div>
                  <div className="text-4xl font-playfair">1</div>
                  <ChevronRight className="mx-auto mt-1 h-4 w-4" />
                </div>
                <div className="bg-[#d69c4f] p-4 text-white text-center">
                  <div className="uppercase text-xs mb-1">Noches</div>
                  <div className="text-4xl font-playfair">1</div>
                </div>
              </div>
            </div>

            {/* Room 1 - Simple */}
            <div className="border border-gray-200 rounded-md overflow-hidden bg-white">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=350"
                  alt="Habitación Simple"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-playfair mb-2">
                  Habitación Simple
                </h3>
                <div className="flex items-center mb-4 text-sm text-gray-500">
                  <Users className="h-4 w-4 mr-1" />
                  <span>1 PERSONA</span>
                </div>
                <p className="text-sm mb-6">
                  Ideal para viajeros individuales que buscan confort y
                  funcionalidad.
                </p>
                <Link
                  href="/habitaciones/simple"
                  className="block w-full border border-[#d69c4f] text-[#d69c4f] py-2 px-4 rounded-md hover:bg-[#d69c4f] hover:text-white transition-colors mb-6 text-center"
                >
                  RESERVAR AHORA
                </Link>
                <div className="flex justify-between border-t pt-4">
                  <div className="flex space-x-4">
                    <Wifi className="h-5 w-5 text-gray-400" />
                    <Tv className="h-5 w-5 text-gray-400" />
                    <Coffee className="h-5 w-5 text-gray-400" />
                    <Bath className="h-5 w-5 text-gray-400" />
                  </div>
                  <Link
                    href="/habitaciones/simple"
                    className="text-xs text-[#d69c4f] flex items-center"
                  >
                    VER MÁS <ChevronRight className="h-3 w-3 ml-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Room 2 - Doble */}
            <div className="border border-gray-200 rounded-md overflow-hidden bg-white">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=350"
                  alt="Habitación Doble"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-2 right-2 bg-white text-xs py-1 px-2 rounded">
                  ONLY 4 ROOMS LEFT AT THIS PRICE
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-playfair mb-2">Habitación Doble</h3>
                <div className="flex items-center mb-4 text-sm text-gray-500">
                  <Users className="h-4 w-4 mr-1" />
                  <span>4 PERSONAS</span>
                </div>
                <p className="text-sm mb-6">
                  Perfecta para amigos o familiares que desean compartir su
                  estadía sin perder privacidad.
                </p>
                <Link
                  href="/habitaciones/doble"
                  className="block w-full border border-[#d69c4f] text-[#d69c4f] py-2 px-4 rounded-md hover:bg-[#d69c4f] hover:text-white transition-colors mb-6 text-center"
                >
                  RESERVAR AHORA
                </Link>
                <div className="flex justify-between border-t pt-4">
                  <div className="flex space-x-4">
                    <Wifi className="h-5 w-5 text-gray-400" />
                    <Tv className="h-5 w-5 text-gray-400" />
                    <Coffee className="h-5 w-5 text-gray-400" />
                    <Bath className="h-5 w-5 text-gray-400" />
                  </div>
                  <Link
                    href="/habitaciones/doble"
                    className="text-xs text-[#d69c4f] flex items-center"
                  >
                    VER MÁS <ChevronRight className="h-3 w-3 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Room 3 - Matrimonial */}
          <div className="mt-8 max-w-md mx-auto md:mx-0 md:ml-auto border border-gray-200 rounded-md overflow-hidden bg-white">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=200&width=350"
                alt="Habitación Matrimonial"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-playfair mb-2">
                Habitación Matrimonial
              </h3>
              <div className="flex items-center mb-4 text-sm text-gray-500">
                <Users className="h-4 w-4 mr-1" />
                <span>2 PERSONAS</span>
              </div>
              <p className="text-sm mb-6">
                Opción ideal para parejas que buscan comodidad y privacidad.
              </p>
              <Link
                href="/habitaciones/matrimonial"
                className="block w-full border border-[#d69c4f] text-[#d69c4f] py-2 px-4 rounded-md hover:bg-[#d69c4f] hover:text-white transition-colors mb-6 text-center"
              >
                RESERVAR AHORA
              </Link>
              <div className="flex justify-between border-t pt-4">
                <div className="flex space-x-4">
                  <Wifi className="h-5 w-5 text-gray-400" />
                  <Tv className="h-5 w-5 text-gray-400" />
                  <Coffee className="h-5 w-5 text-gray-400" />
                  <Bath className="h-5 w-5 text-gray-400" />
                </div>
                <Link
                  href="/habitaciones/matrimonial"
                  className="text-xs text-[#d69c4f] flex items-center"
                >
                  VER MÁS <ChevronRight className="h-3 w-3 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
