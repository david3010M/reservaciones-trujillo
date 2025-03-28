import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Header from "@/components/header";
import BookDates from "@/components/book-dates";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Top Bar */}
      <Header />

      {/* Hero Section */}
      <section className="relative h-[500px]">
        <Image
          src="/heroinicio.png?height=500&width=1200"
          alt="Sunset pier view"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
        <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 rounded-full p-2 text-white">
          <ChevronLeft size={24} />
        </button>
        <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 rounded-full p-2 text-white">
          <ChevronRight size={24} />
        </button>
        <div className="absolute bottom-32 right-12 text-white text-right">
          <h1 className="text-4xl font-poppins">Frase Recepciones</h1>
          <h2 className="text-4xl font-poppins">Trujillo</h2>
        </div>
        <div className="absolute bottom-0 w-full flex justify-center">
          <div className="flex space-x-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-white"></div>
            <div className="w-2 h-2 rounded-full bg-white/50"></div>
            <div className="w-2 h-2 rounded-full bg-white/50"></div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <BookDates />

      {/* About Us Section */}
      <section className="py-16 bg-hotel-lightBeige">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/3">
              <div className="relative h-64 mb-4">
                <Image
                  src="/placeholder.svg?height=250&width=350"
                  alt="Hotel lobby"
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <div className="relative h-32">
                <Image
                  src="/placeholder.svg?height=150&width=350"
                  alt="Hotel room"
                  fill
                  className="object-cover rounded-md"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <div className="flex items-center mb-4">
                <div className="h-[1px] w-6 bg-hotel-beige mr-2"></div>
                <span className="text-[#d69c4f] uppercase text-sm">
                  Nosotros
                </span>
              </div>
              <h2 className="text-3xl font-playfair mb-6">
                Bienvenido a<br />
                Recepciones Trujillo
              </h2>
              <p className="text-sm mb-4">
                Conozca Recepciones Trujillo, un emblema de elegancia en
                Trujillo, Perú. Ofrecemos alojamiento de alta calidad con
                instalaciones modernas y servicios personalizados. Nuestras
                habitaciones y ambientes incluyen nuestra decoración
                vanguardista cerca de la Plaza de Armas Trujillo, el centro
                histórico y cultural de la ciudad.
              </p>
              <p className="text-sm mb-4">
                Nuestros salones versátiles para bodas, conferencias y
                celebraciones, administrados por un equipo experto en
                gastronomía, decoración y logística.
              </p>
              <p className="text-sm mb-6">
                <strong>Desde 2015</strong> nos destacamos por brindar atención
                personalizada y experiencias inolvidables, garantizando
                comodidad y elegancia en cada detalle.
              </p>
              <button className="bg-[#d69c4f] text-white py-2 px-6 rounded-md text-sm">
                Saber más
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-12 bg-[#fae9d1] text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-medium mb-2">
            ¡ VIVE UNA EXPERIENCIA INOLVIDABLE CON NOSOTROS !
          </h2>
          <p className="mb-6">
            Reserva tu estadía o planifica tu evento perfecto con solo un click
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-[#1b1b1b] text-white py-2 px-6 rounded-md text-sm">
              Reservar habitación
            </button>
            <button className="bg-[#1b1b1b] text-white py-2 px-6 rounded-md text-sm">
              Cotizar evento
            </button>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-4">
            <div className="h-[1px] w-6 bg-[#d69c4f] mr-2"></div>
            <span className="text-[#d69c4f] uppercase text-sm">
              Habitaciones
            </span>
          </div>
          <div className="flex flex-col md:flex-row justify-between mb-8">
            <h2 className="text-3xl font-playfair">
              NUESTRAS
              <br />
              HABITACIONES
            </h2>
            <p className="max-w-md text-sm">
              Our rooms offer a harmonious blend of comfort and elegance,
              designed to provide an exceptional stay for every guest. Each room
              features plush bedding, high-quality linens, and a selection of
              pillows to ensure a restful night's sleep.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Room 1 */}
            <div className="rounded-md overflow-hidden border border-gray-200">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=350"
                  alt="Habitación Simple"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 bg-white">
                <h3 className="text-xl font-playfair mb-2">
                  Habitación Simple
                </h3>
                <p className="text-sm text-gray-600">
                  Habitación con cama individual, baño privado, TV, internet y
                  comodidades.
                </p>
              </div>
            </div>
            {/* Room 2 */}
            <div className="rounded-md overflow-hidden border border-gray-200">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=350"
                  alt="Habitación Doble"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 bg-white">
                <h3 className="text-xl font-playfair mb-2">Habitación Doble</h3>
                <p className="text-sm text-gray-600">
                  Habitación con dos camas individuales, baño privado, TV,
                  internet y comodidades.
                </p>
              </div>
            </div>
            {/* Room 3 */}
            <div className="rounded-md overflow-hidden border border-gray-200">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=350"
                  alt="Habitación Matrimonial"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 bg-white">
                <h3 className="text-xl font-playfair mb-2">
                  Habitación Matrimonial
                </h3>
                <p className="text-sm text-gray-600">
                  Habitación con cama matrimonial, TV, internet, confort y
                  comodidades.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-[#f0e9df]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <div className="flex justify-center items-center mb-4">
              <div className="h-[1px] w-6 bg-[#d69c4f] mr-2"></div>
              <span className="text-[#d69c4f] uppercase text-sm">
                Contáctanos
              </span>
              <div className="h-[1px] w-6 bg-[#d69c4f] ml-2"></div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-playfair mb-6">CONTACTO</h2>
              <form>
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Nombre completo*"
                    className="w-full p-3 bg-[#e5d3bb] rounded-md border-none"
                  />
                </div>
                <div className="mb-4 flex gap-4">
                  <input
                    type="text"
                    placeholder="Teléfono*"
                    className="w-1/2 p-3 bg-[#e5d3bb] rounded-md border-none"
                  />
                  <select className="w-1/2 p-3 bg-[#e5d3bb] rounded-md border-none appearance-none">
                    <option>Tipo de servicio</option>
                  </select>
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    placeholder="Email*"
                    className="w-full p-3 bg-[#e5d3bb] rounded-md border-none"
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    placeholder="Escribe tu mensaje aquí"
                    className="w-full p-3 bg-[#e5d3bb] rounded-md border-none h-24"
                  ></textarea>
                </div>
                <button className="bg-[#1b1b1b] text-white py-2 px-6 rounded-md">
                  Enviar
                </button>
              </form>
            </div>
            <div className="w-full md:w-1/2">
              <div className="relative h-full min-h-[300px]">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Trujillo Church"
                  fill
                  className="object-cover rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="bg-[#f0e9df] py-6 border-t border-[#e5d3bb]">
          <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
            <div>
              <p className="text-sm">
                Ubicanos en: Av. Túpac Amaru 812 - Trujillo
              </p>
            </div>
            <div>
              <p className="text-sm">Medios de pago:</p>
              <div className="flex space-x-2 mt-2">
                <Image
                  src="/placeholder.svg?height=30&width=40"
                  alt="Visa"
                  width={40}
                  height={30}
                />
                <Image
                  src="/placeholder.svg?height=30&width=40"
                  alt="Mastercard"
                  width={40}
                  height={30}
                />
                <Image
                  src="/placeholder.svg?height=30&width=40"
                  alt="American Express"
                  width={40}
                  height={30}
                />
                <Image
                  src="/placeholder.svg?height=30&width=40"
                  alt="Diners Club"
                  width={40}
                  height={30}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#000000] text-white py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/4 mb-6 md:mb-0">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="Recepciones Trujillo Logo"
                  width={80}
                  height={80}
                  className="mb-4"
                />
              </div>
              <div className="w-full md:w-3/4 grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <h3 className="text-sm font-medium mb-4">Inicio</h3>
                </div>
                <div>
                  <h3 className="text-sm font-medium mb-4">Eventos</h3>
                  <ul className="text-xs space-y-2 text-gray-400">
                    <li>Reservas</li>
                    <li>Galería</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-medium mb-4">Contacto</h3>
                  <ul className="text-xs space-y-2 text-gray-400">
                    <li>Términos y condiciones</li>
                    <li>Política web de privacidad</li>
                  </ul>
                </div>
                <div>
                  <div className="flex space-x-4 mb-4">
                    <a href="#" className="text-[#d69c4f]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </a>
                    <a href="#" className="text-[#d69c4f]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect
                          x="2"
                          y="2"
                          width="20"
                          height="20"
                          rx="5"
                          ry="5"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </a>
                    <a href="#" className="text-[#d69c4f]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#000000] text-gray-500 text-xs py-4 border-t border-gray-800">
          <div className="container mx-auto px-4 text-center">
            Recepciones Trujillo ©2023 Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </main>
  );
}
