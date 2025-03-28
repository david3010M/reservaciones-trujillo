"use client"

import Image from "next/image"
import Link from "next/link"

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
    description: "Ideal para viajeros individuales que buscan confort y funcionalidad.",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    amenities: [
      "Breakfast Included",
      "Free Wi-Fi",
      "Free Parking",
      "Pets Are Welcome",
      "Free Laundry Service",
      "No Smoking",
      "Free Entrance Exercise Centre",
    ],
  },
  doble: {
    slug: "doble",
    title: "Habitación Doble",
    capacity: 4,
    price: 89,
    description: "Perfecta para amigos o familiares que desean compartir su estadía sin perder privacidad.",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    amenities: [
      "Breakfast Included",
      "Free Wi-Fi",
      "Free Parking",
      "Pets Are Welcome",
      "Free Laundry Service",
      "No Smoking",
      "Free Entrance Exercise Centre",
    ],
  },
  matrimonial: {
    slug: "matrimonial",
    title: "Habitación Matrimonial",
    capacity: 2,
    price: 79,
    description: "Opción ideal para parejas que buscan comodidad y privacidad.",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    amenities: [
      "Breakfast Included",
      "Free Wi-Fi",
      "Free Parking",
      "Pets Are Welcome",
      "Free Laundry Service",
      "No Smoking",
      "Free Entrance Exercise Centre",
    ],
  },
}

export default function ConfirmacionPage({ params }: { params: { slug: string } }) {
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

  // Generar un número de reserva aleatorio
  const reservationNumber = Math.floor(1000 + Math.random() * 9000)

  // Calcular fechas de ejemplo para la reserva
  const today = new Date()
  const checkIn = new Date(today)
  checkIn.setDate(today.getDate() + 7) // Una semana después
  const checkOut = new Date(checkIn)
  checkOut.setDate(checkIn.getDate() + 4) // 4 noches de estancia

  const formatDate = (date: Date) => {
    return `${date.getDate()} Marzo ${date.getFullYear()}`
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

      {/* Confirmation Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex flex-col md:flex-row items-baseline gap-2 mb-2">
            <h1 className="text-2xl md:text-3xl font-playfair">El estado de tu reserva</h1>
            <h2 className="text-2xl md:text-3xl font-playfair text-[#d69c4f]">Confirmada</h2>
          </div>

          <p className="text-gray-600 mb-8">
            Comuníquese con EasySet24 si necesita cambiar la información básica con el número de reserva{" "}
            {reservationNumber}.
          </p>

          <div className="border border-gray-200 rounded-md overflow-hidden mb-8">
            {/* Banner */}
            <div className="relative h-48 bg-black">
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h3 className="text-3xl md:text-4xl font-playfair tracking-wider mb-4">RECEPCIONES TRUJILLO</h3>
                <p className="text-sm md:text-base tracking-widest">HABITACIONES Y EVENTOS INOLVIDABLES</p>
              </div>
            </div>

            {/* Reservation Info */}
            <div className="bg-gray-100 p-4">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                <h3 className="text-lg font-playfair mb-2 md:mb-0">Recepciones Trujillo - {room.title}</h3>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex items-center">
                    <span className="text-sm">Ingreso: 11:00am - {formatDate(checkIn)}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm">Salida: 18:00pm - {formatDate(checkOut)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Reservation Details Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="py-3 px-4 text-left">Noches</th>
                    <th className="py-3 px-4 text-left">Check-In</th>
                    <th className="py-3 px-4 text-left">Check-out</th>
                    <th className="py-3 px-4 text-left">Cantidad</th>
                    <th className="py-3 px-4 text-left">Tipo de habitación</th>
                    <th className="py-3 px-4 text-left">Tipo de cama</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-4">4 Noches</td>
                    <td className="py-4 px-4">17 Mar 2025</td>
                    <td className="py-4 px-4">21 Mar 2025</td>
                    <td className="py-4 px-4">1 Habitación</td>
                    <td className="py-4 px-4">Simple</td>
                    <td className="py-4 px-4">2 Plazas</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Guest Info */}
            <div className="p-4 border-t border-gray-200">
              <p className="font-medium">Adultos 1</p>
            </div>
          </div>

          {/* Cancellation Policy */}
          <div className="mb-8">
            <h3 className="text-xl font-playfair mb-4">Política De Cancelación</h3>
            <h4 className="font-medium mb-2">Prestar Atención</h4>
            <p className="text-gray-600">
              Esta reserva constituye el paso final del proceso de reserva del hotel. Se considera definitiva y el hotel
              solo podrá cancelarla en caso de circunstancias imprevistas o desastres naturales.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href="/" className="bg-[#d69c4f] text-white py-3 px-6 rounded-md text-center">
              Volver al inicio
            </Link>
            <button
              className="border border-[#d69c4f] text-[#d69c4f] py-3 px-6 rounded-md"
              onClick={() => window.print()}
            >
              Imprimir confirmación
            </button>
          </div>
        </div>
      </section>

      {/* Footer - Same as homepage */}
      <footer className="bg-[#000000] text-white py-8 mt-12">
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
        <div className="bg-[#000000] text-gray-500 text-xs py-4 border-t border-gray-800 mt-8">
          <div className="container mx-auto px-4 text-center">
            Recepciones Trujillo ©2025 Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </main>
  )
}

