import { Facebook, Instagram, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const linksColumn1 = [
    { label: "Inicio", link: "/" },
    { label: "Nosotros", link: "/nosotros" },
    { label: "Habitaciones", link: "/habitaciones" },
    { label: "Restaurante", link: "/restaurante" },
  ];
  const linksColumn2 = [
    { label: "Evento", link: "/eventos" },
    { label: "Galería", link: "/galeria" },
    { label: "Contacto", link: "/contacto" },
  ];
  const linksColumn3 = [
    { label: "Términos y Condiciones", link: "/terminos" },
    { label: "Política web de privacidad", link: "/privacidad" },
  ];

  const socialLinks = [
    { href: "#", icon: <Facebook className="w-5 h-5 fill-current" /> },
    { href: "#", icon: <Instagram className="w-5 h-5" /> },
    { href: "#", icon: <Youtube className="w-5 h-5" /> },
  ];

  return (
    <footer>
      <div className="bg-black text-white py-8">
        <div className="max-w-screen-lg mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="w-full flex justify-center md:w-fit">
              <Link href="/" className="flex items-center">
                <Image
                  src="/logo.svg"
                  alt="Recepciones Trujillo Logo"
                  width={80}
                  height={80}
                  className="mb-4"
                />
              </Link>
            </div>
            <div className="w-full md:w-2/4 grid grid-cols-3 gap-6">
              {[linksColumn1, linksColumn2, linksColumn3].map(
                (links, index) => (
                  <div key={index} className="flex flex-col gap-2">
                    {links.map((linkObj, idx) => (
                      <Link href={linkObj.link} key={idx} className="text-sm">
                        {linkObj.label}
                      </Link>
                    ))}
                  </div>
                )
              )}
            </div>
            <div>
              <div className="flex flex-row md:flex-col gap-4 items-center justify-center md:justify-start">
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    className="text-[#d69c4f]"
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black text-gray-500 text-xs py-4 border-t border-gray-800">
        <div className="max-w-screen-lg mx-auto px-4 text-center">
          Recepciones Trujillo &copy; {currentYear}. Todos los derechos
          reservados.
        </div>
      </div>
    </footer>
  );
}
