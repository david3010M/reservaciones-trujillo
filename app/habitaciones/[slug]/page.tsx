import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Check } from "lucide-react"

// Definición de tipos para las habitaciones
type RoomType = {
  slug: string
  title: string
  capacity: number
  price: number
  description: string
  images: string[]
  amenities: string[]
}

// Datos de muestra para las habitaciones
const rooms: Record<string, RoomType> = {
  simple: {
    slug: "simple",
    title: "Habitación Simple",
    capacity: 1,
    price: 59,
    description:
      "Amet nulla officia duis reprehenderit do labore aute pariatur anim consequat ullamco elit in duis incididunt eu officia do voluptate anim nulla officia id cillum esse in velit anim dolor enim exercitation veniam do deserunt dolor in id dolor culpa reprehenderit aute cillum amet sunt mollit incididunt quis qui ut enim adipisicing nostrud aliquip esse nostrud duis enim nisi id in est ea incididunt pariatur non aute ullamco.",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    amenities: [
      "cama king",
      "TV LED con cable y plataformas de entretenimiento",
      "Wi-Fi de alta velocidad",
      "Baño privado",
      "Ropero y área de descanso",
      "Escritorio equipado",
      "Servicio de lavandería",
    ],
  },
  doble: {
    slug: "doble",
    title: "Habitación Doble",
    capacity: 4,
    price: 89,
    description:
      "Perfecta para amigos o familiares que desean compartir su estadía sin perder privacidad. Amet nulla officia duis reprehenderit do labore aute pariatur anim consequat ullamco elit in duis incididunt eu officia do voluptate anim nulla officia id cillum esse in velit anim dolor enim exercitation veniam do deserunt dolor in id dolor.",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    amenities: [
      "2 camas dobles",
      "TV LED con cable y plataformas de entretenimiento",
      "Wi-Fi de alta velocidad",
      "Baño privado",
      "Ropero y área de descanso",
      "Escritorio equipado",
      "Servicio de lavandería",
      "Minibar",
    ],
  },
  matrimonial: {
    slug: "matrimonial",
    title: "Habitación Matrimonial",
    capacity: 2,
    price: 79,
    description:
      "Opción ideal para parejas que buscan comodidad y privacidad. Amet nulla officia duis reprehenderit do labore aute pariatur anim consequat ullamco elit in duis incididunt eu officia do voluptate anim nulla officia id cillum esse in velit anim dolor enim exercitation veniam do deserunt dolor in id dolor.",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    amenities: [
      "cama king size",
      "TV LED con cable y plataformas de entretenimiento",
      "Wi-Fi de alta velocidad",
      "Baño privado con tina",
      "Ropero y área de descanso",
      "Escritorio equipado",
      "Servicio de lavandería",
      "Vista panorámica",
    ],
  },
}

export default function RoomDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params
  const room = rooms[slug]

  if (!room) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-playfair mb-4">Habitación no encontrada</h1>
          <Link href="/habitaciones" className="text-[#d69c4f] hover:underline">
            Volver a habitaciones
          </Link>
        </div>
      </div>
    )
  }

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

      {/* Room Detail Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair mb-8">{room.title}</h2>

          {/* Room Gallery */}
          <div className="relative bg-gray-200 mb-8">
            <div className="flex overflow-hidden h-[400px]">
              {room.images.map((image, index) => (
                <div key={index} className="min-w-full">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${room.title} - Imagen ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Gallery Navigation */}
            <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 rounded-full p-2 text-white z-10">
              <ChevronLeft size={24} />
            </button>
            <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 rounded-full p-2 text-white z-10">
              <ChevronRight size={24} />
            </button>

            {/* Gallery Dots */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
              {room.images.map((_, index) => (
                <div key={index} className={`w-2 h-2 rounded-full ${index === 0 ? "bg-white" : "bg-white/50"}`}></div>
              ))}
            </div>
          </div>

          {/* Room Info */}
          <div className="bg-gray-200 p-8 rounded-md mb-8">
            <div className="flex flex-col md:flex-row justify-between items-center mb-4 pb-4 border-b border-gray-300">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="bg-white rounded-full p-2 mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <span>
                  {room.capacity} {room.capacity === 1 ? "Persona" : "Personas"}
                </span>
              </div>

              <div className="flex items-center mb-4 md:mb-0">
                <div className="bg-white rounded-full p-2 mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                </div>
                <span>S/{room.price} / Noche</span>
              </div>

              <Link
                href={`/habitaciones/${slug}/reservar`}
                className="bg-[#d69c4f] text-white py-2 px-8 rounded-md uppercase text-sm font-medium"
              >
                Reservar ahora
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-playfair mb-4 uppercase">{room.title}</h3>
                <p className="text-sm text-gray-700">{room.description}</p>
              </div>

              <div>
                <h3 className="text-xl font-playfair mb-4 uppercase">Servicios incluidos</h3>
                <ul className="space-y-2">
                  {room.amenities.map((amenity, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-[#d69c4f] mr-2 mt-0.5" />
                      <span className="text-sm">{amenity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Back to Rooms Button */}
          <div className="text-center">
            <Link
              href="/habitaciones"
              className="inline-block border border-[#d69c4f] text-[#d69c4f] py-2 px-6 rounded-md hover:bg-[#d69c4f] hover:text-white transition-colors"
            >
              Volver a habitaciones
            </Link>
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

