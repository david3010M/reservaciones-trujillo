import { Facebook, Instagram, Mail, MapPin } from "lucide-react";
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
    { label: "Términos y Condiciones", link: "/terminosycondiciones" },
    { label: "Política web de privacidad", link: "/politicaprivacidad" },
  ];
  const phone = "+51906250017";
  const message =
    "👋¡Hola! Gracias por contactar al HOTEL RECEPCIONES TRUJILLO. ¿Desea hacer una reserva, cotizar un evento o conocer nuestras promociones? Estamos aquí para ayudarte. 🙌";
  const whatsappLink = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(
    message
  )}`;

  const socialLinks = [
    {
      href: "https://www.facebook.com/p/Recepciones-Trujillo-100080956734787",
      icon: <Facebook className="w-5 h-5 fill-current" />,
    },
    {
      href: "https://www.instagram.com/recepciones.trujillo/",
      icon: <Instagram className="w-5 h-5" />,
    },
    {
      href: "mailto:reservas@hotelrecepcionestrujillo.com",
      icon: <Mail className="w-5 h-5" />,
    },
    {
      href: whatsappLink,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 50 50"
          fill="#D69C4F"
        >
          <path d="M25,2C12.318,2,2,12.318,2,25c0,3.96,1.023,7.854,2.963,11.29L2.037,46.73c-0.096,0.343-0.003,0.711,0.245,0.966 C2.473,47.893,2.733,48,3,48c0.08,0,0.161-0.01,0.24-0.029l10.896-2.699C17.463,47.058,21.21,48,25,48c12.682,0,23-10.318,23-23 S37.682,2,25,2z M36.57,33.116c-0.492,1.362-2.852,2.605-3.986,2.772c-1.018,0.149-2.306,0.213-3.72-0.231 c-0.857-0.27-1.957-0.628-3.366-1.229c-5.923-2.526-9.791-8.415-10.087-8.804C15.116,25.235,13,22.463,13,19.594 s1.525-4.28,2.067-4.864c0.542-0.584,1.181-0.73,1.575-0.73s0.787,0.005,1.132,0.021c0.363,0.018,0.85-0.137,1.329,1.001 c0.492,1.168,1.673,4.037,1.819,4.33c0.148,0.292,0.246,0.633,0.05,1.022c-0.196,0.389-0.294,0.632-0.59,0.973 s-0.62,0.76-0.886,1.022c-0.296,0.291-0.603,0.606-0.259,1.19c0.344,0.584,1.529,2.493,3.285,4.039 c2.255,1.986,4.158,2.602,4.748,2.894c0.59,0.292,0.935,0.243,1.279-0.146c0.344-0.39,1.476-1.703,1.869-2.286 s0.787-0.487,1.329-0.292c0.542,0.194,3.445,1.604,4.035,1.896c0.59,0.292,0.984,0.438,1.132,0.681 C37.062,30.587,37.062,31.755,36.57,33.116z"></path>
        </svg>
      ),
    },
  ];

  return (
    <footer>
      <div className="bg-black text-white py-8">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start justify-between gap-6">
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
            <div className="w-full md:w-1/4 flex flex-col items-center md:items-start justify-start h-full">
              <div>
                <div className="flex gap-4 items-center justify-center md:justify-start">
                  {socialLinks.map((social, index) => (
                    <Link
                      key={index}
                      href={social.href}
                      target="_blank"
                      className="text-hotel-gold"
                    >
                      {social.icon}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2 mt-4">
                <MapPin className="w-5 h-5 text-hotel-gold" />
                <span className="text-sm">
                  Av. Tahuantinsuyo 814, La Esperanza – Trujillo
                </span>
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
