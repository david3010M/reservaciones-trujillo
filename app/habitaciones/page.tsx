import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Wifi, Tv, Coffee, Bath, Users } from "lucide-react"

export default function HabitacionesPage() {
  return (
    <main className="min-h-screen">
      {/* Top Bar - Same as homepage */}
      <div className="bg-[#1b1b1b] text-[#f2f2f2] py-1 px-4 text-xs flex justify-between">
        <div className="flex items-center">
          <span>Español (ES)</span>
        </div>
        <div className="flex items-center space-x-4">
          <span>+51 999999999</span>
          <span>reservas@recepcionestrujillo.com</span>
        </div>
      </div>

      {/* Navigation - Same as homepage but with Habitaciones highlighted */}
      <nav className="bg-[#000000] text-white py-2 px-6 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/placeholder.svg?height=60&width=60"
              alt="Recepciones Trujillo Logo"
              width={60}
              height={60}
              className="mr-2"
            />
          </Link>
          <div className="text-xs uppercase tracking-wider">
            <div>Recepciones</div>
            <div>Trujillo</div>
          </div>
        </div>
        <div className="hidden md:flex space-x-8 text-sm uppercase">
          <Link href="/" className="hover:text-[#d69c4f]">
            Inicio
          </Link>
          <Link href="/nosotros" className="hover:text-[#d69c4f]">
            Nosotros
          </Link>
          <Link href="/habitaciones" className="text-[#d69c4f]">
            Habitaciones
          </Link>
          <Link href="/eventos" className="hover:text-[#d69c4f]">
            Eventos
          </Link>
          <Link href="#" className="hover:text-[#d69c4f]">
            Reservas
          </Link>
          <Link href="#" className="hover:text-[#d69c4f]">
            Galería
          </Link>
          <Link href="#" className="hover:text-[#d69c4f]">
            Contacto
          </Link>
        </div>
      </nav>

      {/* Habitaciones Header */}
      <section className="bg-[#f0e9df] py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-playfair mb-4">Habitaciones</h1>
          <p className="text-[#d69c4f] max-w-3xl mx-auto">
            Ofrecemos habitaciones diseñadas para brindar comodidad, privacidad y una experiencia de estadía
            excepcional, adaptándose a las necesidades de cada huésped.
          </p>
        </div>
      </section>

      {/* Rooms Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair mb-12">Conoce nuestras habitaciones</h2>

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
                <h3 className="text-xl font-playfair mb-2">Habitación Simple</h3>
                <div className="flex items-center mb-4 text-sm text-gray-500">
                  <Users className="h-4 w-4 mr-1" />
                  <span>1 PERSONA</span>
                </div>
                <p className="text-sm mb-6">Ideal para viajeros individuales que buscan confort y funcionalidad.</p>
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
                  <Link href="/habitaciones/simple" className="text-xs text-[#d69c4f] flex items-center">
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
                  Perfecta para amigos o familiares que desean compartir su estadía sin perder privacidad.
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
                  <Link href="/habitaciones/doble" className="text-xs text-[#d69c4f] flex items-center">
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
              <h3 className="text-xl font-playfair mb-2">Habitación Matrimonial</h3>
              <div className="flex items-center mb-4 text-sm text-gray-500">
                <Users className="h-4 w-4 mr-1" />
                <span>2 PERSONAS</span>
              </div>
              <p className="text-sm mb-6">Opción ideal para parejas que buscan comodidad y privacidad.</p>
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
                <Link href="/habitaciones/matrimonial" className="text-xs text-[#d69c4f] flex items-center">
                  VER MÁS <ChevronRight className="h-3 w-3 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Same as homepage */}
      <footer>
        <div className="bg-[#f0e9df] py-6 border-t border-[#e5d3bb]">
          <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
            <div>
              <p className="text-sm">Ubicanos en: Av. Túpac Amaru 812 - Trujillo</p>
            </div>
            <div>
              <p className="text-sm">Medios de pago:</p>
              <div className="flex space-x-2 mt-2">
                <Image src="/placeholder.svg?height=30&width=40" alt="Visa" width={40} height={30} />
                <Image src="/placeholder.svg?height=30&width=40" alt="Mastercard" width={40} height={30} />
                <Image src="/placeholder.svg?height=30&width=40" alt="American Express" width={40} height={30} />
                <Image src="/placeholder.svg?height=30&width=40" alt="Diners Club" width={40} height={30} />
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
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
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
  )
}

