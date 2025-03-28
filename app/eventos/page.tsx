import Image from "next/image"
import Link from "next/link"

export default function EventosPage() {
  return (
    <main className="min-h-screen">
      {/* Top Bar */}
      <div className="bg-[#1b1b1b] text-[#f2f2f2] py-1 px-4 text-xs flex justify-between">
        <div className="flex items-center">
          <span>Español (ES)</span>
        </div>
        <div className="flex items-center space-x-4">
          <span>+51 999999999</span>
          <span>reservas@recepcionestrujillo.com</span>
        </div>
      </div>

      {/* Navigation - with Eventos highlighted */}
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
          <Link href="/habitaciones" className="hover:text-[#d69c4f]">
            Habitaciones
          </Link>
          <Link href="/eventos" className="text-[#d69c4f]">
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

      {/* Eventos Header */}
      <section className="bg-[#f0e9df] py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-playfair mb-4">Eventos</h1>
          <p className="text-[#d69c4f] max-w-3xl mx-auto">
            Contamos con salones modernos y equipados para la realización de eventos sociales y corporativos,
            garantizando un servicio impecable y una experiencia inolvidable.
          </p>
        </div>
      </section>

      {/* Eventos Grid - First Row */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Salón de Recepciones */}
            <div className="bg-white rounded-md overflow-hidden shadow-md">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Salón de Recepciones"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-playfair mb-2">Salón de Recepciones</h2>
                <p className="text-gray-600 mb-4">
                  Ideal para bodas, aniversarios, cumpleaños y eventos familiares, con capacidad de hasta 300 personas.
                </p>
                <button className="bg-[#d69c4f] text-white py-2 px-4 rounded-md">Más detalles</button>
              </div>
            </div>

            {/* Centro de Convenciones */}
            <div className="bg-white rounded-md overflow-hidden shadow-md">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Centro de Convenciones"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-playfair mb-2">Centro de Convenciones</h2>
                <p className="text-gray-600 mb-4">
                  Espacio versátil para congresos, conferencias y reuniones empresariales.
                </p>
                <button className="bg-[#d69c4f] text-white py-2 px-4 rounded-md">Más detalles</button>
              </div>
            </div>

            {/* Salas VIP */}
            <div className="bg-white rounded-md overflow-hidden shadow-md">
              <div className="relative h-64">
                <Image src="/placeholder.svg?height=300&width=400" alt="Salas VIP" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-playfair mb-2">Salas VIP</h2>
                <p className="text-gray-600 mb-4">
                  Áreas privadas para eventos exclusivos, reuniones ejecutivas o celebraciones íntimas.
                </p>
                <button className="bg-[#d69c4f] text-white py-2 px-4 rounded-md">Más detalles</button>
              </div>
            </div>
          </div>

          {/* Eventos Grid - Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Catering Personalizado */}
            <div className="bg-white rounded-md overflow-hidden shadow-md">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Catering Personalizado"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-playfair mb-2">Catering Personalizado</h2>
                <p className="text-gray-600 mb-4">
                  Menús diseñados por chefs expertos con opciones a la medida del evento.
                </p>
                <button className="bg-[#d69c4f] text-white py-2 px-4 rounded-md">Más detalles</button>
              </div>
            </div>

            {/* Decoración y Ambientación */}
            <div className="bg-white rounded-md overflow-hidden shadow-md">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Decoración y Ambientación"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-playfair mb-2">Decoración y Ambientación</h2>
                <p className="text-gray-600 mb-4">
                  Diseños personalizados para cada tipo de celebración, desde bodas elegantes hasta eventos temáticos.
                </p>
                <button className="bg-[#d69c4f] text-white py-2 px-4 rounded-md">Más detalles</button>
              </div>
            </div>

            {/* Equipamiento Audiovisual */}
            <div className="bg-white rounded-md overflow-hidden shadow-md">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Equipamiento Audiovisual"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-playfair mb-2">Equipamiento Audiovisual</h2>
                <p className="text-gray-600 mb-4">Pantallas, proyectores, micrófonos y sonido de alta calidad.</p>
                <button className="bg-[#d69c4f] text-white py-2 px-4 rounded-md">Más detalles</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 bg-[#fae9d1] text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair mb-4">¿Listo para organizar tu evento?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Nuestro equipo de expertos está listo para ayudarte a planificar cada detalle de tu evento y hacer que sea
            inolvidable.
          </p>
          <button className="bg-[#1b1b1b] text-white py-2 px-6 rounded-md text-sm">Cotizar evento</button>
        </div>
      </section>

      {/* Footer */}
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
            Recepciones Trujillo ©2025 Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </main>
  )
}

