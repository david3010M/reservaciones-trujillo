"use client";

import { Phone, MapPin, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";

const menuItemsLeft = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/habitaciones", label: "Habitaciones" },
  { href: "/restaurante", label: "Restaurante" },
];

const menuItemsRight = [
  { href: "/eventos", label: "Salones" },
  { href: "/galeria", label: "Galería" },
  { href: "/contacto", label: "Contacto" },
];

const menuItems = [...menuItemsLeft, ...menuItemsRight];

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
          <div className="hidden md:flex items-center gap-2">
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
      <nav className="bg-black text-white py-2 px-6 font-marcellus flex justify-between sm:block">
        {/* Desktop Menu */}
        <div className="flex items-center justify-between max-w-screen-xl sm:mx-auto">
          <div className="hidden md:flex space-x-8 text-sm">
            {menuItemsLeft.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="hover:text-hotel-gold"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="Recepciones Trujillo Logo"
              width={100}
              height={100}
              className="mr-2 w-20 h-20"
            />
          </Link>
          <div className="hidden md:flex space-x-8 text-sm">
            {menuItemsRight.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="hover:text-hotel-gold"
              >
                {item.label}
              </Link>
            ))}
          </div>
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
