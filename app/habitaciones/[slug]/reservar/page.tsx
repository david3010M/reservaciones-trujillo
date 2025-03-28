import Image from "next/image"
import Link from "next/link"
import { Check, Edit2, ChevronDown } from "lucide-react"

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

export default function ReservarPage({ params }: { params: { slug: string } }) {
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

  // Calcular fechas de ejemplo para la reserva
  const today = new Date()
  const checkIn = new Date(today)
  checkIn.setDate(today.getDate() + 7) // Una semana después
  const checkOut = new Date(checkIn)
  checkOut.setDate(checkIn.getDate() + 4) // 4 noches de estancia

  const formatDate = (date: Date) => {
    return `${date.getDate()} Marzo ${date.getFullYear()}`
  }

  // Calcular precio total
  const nights = 4
  const originalPrice = room.price * nights
  const discount = 10
  const totalPrice = originalPrice - discount

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

      {/* Reservation Form */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-playfair mb-8">Gestionar tu reserva</h1>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Column - Room Info */}
            <div className="w-full lg:w-1/3">
              <div className="border border-gray-200 rounded-md overflow-hidden">
                <div className="p-4 border-b border-gray-200">
                  <h2 className="text-xl font-playfair mb-2">{room.title}</h2>
                  <div className="flex items-center">
                    <span className="text-sm mr-2">Valoración</span>
                    <ChevronDown className="h-4 w-4 mr-2" />
                    <span className="bg-[#d69c4f] text-white text-xs px-2 py-1 rounded">4.3</span>
                  </div>
                </div>

                {/* Room Images */}
                <div className="relative h-48">
                  <Image src={room.images[0] || "/placeholder.svg"} alt={room.title} fill className="object-cover" />
                </div>
                <div className="grid grid-cols-2 gap-1 mt-1">
                  <div className="relative h-24">
                    <Image
                      src={room.images[1] || room.images[0]}
                      alt={`${room.title} - vista 2`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-24">
                    <Image
                      src={room.images[2] || room.images[0]}
                      alt={`${room.title} - vista 3`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Amenities */}
                <div className="p-4">
                  {room.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center py-2 border-b border-gray-100">
                      <div className="mr-3">
                        {index === 0 && (
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
                            <path d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z"></path>
                            <path d="m9 14 2 2 4-4"></path>
                          </svg>
                        )}
                        {index === 1 && (
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
                            <path d="M5 12.55a11 11 0 0 1 14.08 0"></path>
                            <path d="M1.42 9a16 16 0 0 1 21.16 0"></path>
                            <path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
                            <line x1="12" y1="20" x2="12" y2="20"></line>
                          </svg>
                        )}
                        {index === 2 && (
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
                            <rect x="3" y="5" width="18" height="14" rx="2"></rect>
                            <path d="M6 8h.01"></path>
                            <path d="M9 8h.01"></path>
                          </svg>
                        )}
                        {index === 3 && (
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
                            <path d="M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703 1.725 1.722 3.656 1 1.261-.472 1.96-1.45 2.344-2.5"></path>
                            <path d="M14.5 5.17c0-1.39 1.577-2.493 3.5-2.172 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5"></path>
                            <path d="M8 14v.5"></path>
                            <path d="M16 14v.5"></path>
                            <path d="M11.25 16.25h1.5L12 17l-.75-.75Z"></path>
                            <path d="M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444c0-1.061-.162-2.2-.493-3.309m-9.243-6.082A8.801 8.801 0 0 1 12 5c.78 0 1.5.108 2.161.306"></path>
                          </svg>
                        )}
                        {index === 4 && (
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
                            <path d="M3 7h2c1 0 4 0 4 3s-3 3-4 3H3"></path>
                            <path d="M10 17h2c1 0 4 0 4-3s-3-3-4-3h-2"></path>
                            <path d="M3 17h4"></path>
                            <path d="M17 7h4"></path>
                          </svg>
                        )}
                        {index === 5 && (
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
                            <path d="m2 16 2 2 4-4"></path>
                            <path d="M3 7c0-1.7 1.3-3 3-3h12c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H6c-1.7 0-3-1.3-3-3V7Z"></path>
                            <path d="M10 10a2 2 0 1 0 4 0 2 2 0 1 0-4 0Z"></path>
                            <path d="m16 7-3.5 3.5"></path>
                            <path d="m7.5 16 3.5-3.5"></path>
                          </svg>
                        )}
                        {index === 6 && (
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
                            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                          </svg>
                        )}
                      </div>
                      <span className="text-sm">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Reservation Form */}
            <div className="w-full lg:w-2/3">
              <div className="bg-white rounded-md">
                {/* User Information Section */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="bg-[#d69c4f] rounded-full w-10 h-10 flex items-center justify-center text-white mr-3">
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
                          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-medium">Noely Mascol Montestruque</h3>
                        <p className="text-sm text-gray-500">noely@gmail.com</p>
                      </div>
                    </div>
                    <button className="text-[#d69c4f] flex items-center text-sm">
                      <Edit2 className="h-4 w-4 mr-1" />
                      Editar Perfil
                    </button>
                  </div>

                  <h3 className="text-lg font-medium mb-2">Ingrese Su Información</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Asegúrese de que la información que ya ha escrito en su perfil sea correcta.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <label className="block text-sm mb-1">Nombres *</label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded-md p-2"
                        placeholder="Nombres"
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-1">Apellido paterno *</label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded-md p-2"
                        placeholder="Apellido paterno"
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-1">Apellido materno *</label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded-md p-2"
                        placeholder="Apellido materno"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm mb-1">Email</label>
                      <input
                        type="email"
                        className="w-full border border-gray-300 rounded-md p-2"
                        placeholder="Email"
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-1">Número Móvil</label>
                      <div className="flex">
                        <div className="border border-gray-300 rounded-l-md p-2 bg-gray-50 flex items-center">
                          <span className="text-sm">🇵🇪</span>
                        </div>
                        <input
                          type="tel"
                          className="w-full border border-gray-300 rounded-r-md p-2"
                          placeholder="Número de teléfono"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment Information Section */}
                <div className="mb-8">
                  <h3 className="text-lg font-medium mb-4">Información De La Tarjeta Bancaria</h3>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                      <label className="block text-sm mb-1">Nombre En La Tarjeta</label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded-md p-2"
                        placeholder="Nombre completo"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm mb-1">Número Tarjeta</label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded-md p-2"
                        placeholder="XXXX XXXX XXXX XXXX"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-sm mb-1">EXP Date</label>
                        <input
                          type="text"
                          className="w-full border border-gray-300 rounded-md p-2"
                          placeholder="MM/YY"
                        />
                      </div>
                      <div>
                        <label className="block text-sm mb-1">CVC</label>
                        <input type="text" className="w-full border border-gray-300 rounded-md p-2" placeholder="CVC" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Reservation Details Section */}
                <div className="mb-8">
                  <h3 className="text-lg font-medium mb-4">Detalles de su reserva</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                    <div>
                      <h4 className="font-medium mb-2">Ingreso</h4>
                      <p>{formatDate(checkIn)}</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Salida</h4>
                      <p>{formatDate(checkOut)}</p>
                    </div>
                  </div>

                  <ul className="mb-4">
                    <li className="flex items-center mb-2">
                      <Check className="h-4 w-4 mr-2 text-[#d69c4f]" />
                      <span>Se Alojará {nights} Noches.</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <Check className="h-4 w-4 mr-2 text-[#d69c4f]" />
                      <span>Seleccionó 1 Habitación Para:</span>
                    </li>
                    <li className="ml-6 mb-1">1 Adultos</li>
                    <li className="ml-6 mb-1">0 Niños</li>
                    <li className="ml-6">0 Bebés</li>
                  </ul>
                </div>

                {/* Payment Summary Section */}
                <div className="mb-8">
                  <h3 className="text-lg font-medium mb-4">Información De Pago</h3>

                  <h4 className="font-medium mb-2">Su Resumen De Precios</h4>

                  <div className="border-t border-b border-gray-200 py-4 mb-4">
                    <div className="flex justify-between mb-2">
                      <span>Precio Original</span>
                      <span>
                        S/{originalPrice} {nights} Noches
                      </span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span>Descuento</span>
                      <span className="text-red-500">S/{discount}</span>
                    </div>
                    <div className="flex justify-between font-medium">
                      <span>Importe Total A Pagar</span>
                      <span className="text-[#d69c4f]">S/{totalPrice}</span>
                    </div>
                  </div>
                </div>

                {/* Cancellation Policy */}
                <div className="mb-8">
                  <h3 className="text-lg font-medium mb-4">Cancellation Policy</h3>

                  <div className="flex items-start mb-2">
                    <Check className="h-5 w-5 mr-2 text-[#d69c4f]" />
                    <div>
                      <p className="font-medium">Cancelación Gratuita</p>
                      <p className="text-sm">
                        Cancelar/Reprogramar A Más Tardar 24 Horas Antes, De Lo Contrario Pagará El 80% Del Costo.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Pay Button */}
                <Link
                  href={`/habitaciones/${slug}/reservar/confirmacion`}
                  className="w-full bg-[#d69c4f] text-white py-3 rounded-md font-medium block text-center"
                >
                  Pagar
                </Link>
              </div>
            </div>
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

