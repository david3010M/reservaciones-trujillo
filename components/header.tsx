import { Phone, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <div>
      <div className="bg-hotel-gold text-[#f2f2f2] py-1 px-4 text-[8px] md:text-xs flex justify-end">
        <div className="flex items-center gap-4 py-0.5">
          <div>
            <MapPin className="inline mr-1 size-2 sm:size-4" />
            Av. España 1234, Trujillo, Perú
          </div>
          <div>
            <Phone className="inline mr-1 size-2 sm:size-4" />
            +51 999999999
          </div>
          <div>
            <Button
              variant="link"
              size="sm"
              className="text-white text-[8px] md:text-xs h-fit"
            >
              Inicia Sesión
            </Button>
            |
            <Button
              variant="link"
              size="sm"
              className="text-white text-[8px] md:text-xs h-fit"
            >
              Regístrate
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-[#000000] text-white py-2 px-6 flex items-center justify-between">
        <div className="flex items-center">
          <Image
            src="/logo.svg?height=60&width=60"
            alt="Recepciones Trujillo Logo"
            width={60}
            height={60}
            className="mr-2"
          />
        </div>
        <div className="hidden md:flex space-x-8 text-sm uppercase">
          <Link href="/" className="hover:text-[#d69c4f]">
            Inicio
          </Link>
          <Link href="/nosotros" className="hover:text-[#d69c4f]">
            Nosotros
          </Link>
          <Link href="/habitaciones" className="hover:text-[#d69c4f]">
            Habitaciones
          </Link>
          <Link href="/eventos" className="hover:text-[#d69c4f]">
            Eventos
          </Link>
          <Link href="#" className="hover:text-[#d69c4f]">
            Reservas
          </Link>
          <Link href="/galeria" className="hover:text-[#d69c4f]">
            Galería
          </Link>
          <Link href="#" className="hover:text-[#d69c4f]">
            Contacto
          </Link>
        </div>
      </nav>
    </div>
  );
}
