"use client";

import { Phone, MapPin, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const menuItems = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/habitaciones", label: "Habitaciones" },
  { href: "/eventos", label: "Eventos" },
  { href: "#", label: "Reservas" },
  { href: "/galeria", label: "Galería" },
  { href: "#", label: "Contacto" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      <div className="bg-hotel-gold text-hotel-lightBeige py-1 px-4 text-[8px] md:text-xs flex justify-end">
        <div className="flex items-center gap-4 py-0.5">
          <div>
            <MapPin className="inline mr-1 size-2 sm:size-4" />
            Av. España 1234, Trujillo, Perú
          </div>
          <div>
            <Phone className="inline mr-1 size-2 sm:size-4" />
            +51 999999999
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-black text-white py-2 px-6 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg?height=60&width=60"
              alt="Recepciones Trujillo Logo"
              width={60}
              height={60}
              className="mr-2"
            />
          </Link>
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-sm uppercase">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="hover:text-hotel-gold"
            >
              {item.label}
            </Link>
          ))}
        </div>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </nav>
      {/* Mobile Menu Accordion */}
      {isMenuOpen && (
        <div className="bg-black text-white text-sm uppercase flex flex-col space-y-2 py-4 px-6 md:hidden">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="hover:text-hotel-gold text-center"
              onClick={handleMenuItemClick}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
