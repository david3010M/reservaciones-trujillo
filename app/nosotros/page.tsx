import Header from "@/components/header";
import Title from "@/components/title";
import Image from "next/image";
import Link from "next/link";

export default function NosotrosPage() {
  return (
    <main className="min-h-screen">
      {/* Top Bar - Same as homepage */}
      <Header />

      {/* Nosotros Header */}
      <Title title="NOSOTROS" description="Recepciones Trujillo" />

      {/* Historia Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="border border-[#d69c4f]/30 rounded-md p-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl font-playfair text-[#d69c4f] mb-4">
                  Historia
                </h2>
                <p className="text-sm mb-4">
                  In Publishing And Graphic Design, Lorem Ipsum Is A Placeholder
                  Text Commonly Used To Demonstrate The Visual Form Of A
                  Document Or A Typeface Without Relying On Meaningful Content.
                  Lorem Ipsum May Be Used As A Placeholder Before Final Copy Is
                  Available.
                </p>
              </div>
              <div className="w-full md:w-1/2">
                <div className="relative h-64 w-full">
                  <Image
                    src="/placeholder.svg?height=250&width=350"
                    alt="Hotel lobby"
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-8">
            <div className="bg-[#fae9d1] rounded-full flex justify-between max-w-xl mx-auto">
              <button className="flex items-center justify-center space-x-2 py-3 px-6 rounded-full bg-[#d69c4f] text-white">
                <span className="w-6 h-6 rounded-full bg-black flex items-center justify-center text-white text-xs">
                  1
                </span>
                <span>Historia</span>
              </button>
              <button className="flex items-center justify-center space-x-2 py-3 px-6">
                <span className="w-6 h-6 rounded-full bg-black flex items-center justify-center text-white text-xs">
                  2
                </span>
                <span>Misión</span>
              </button>
              <button className="flex items-center justify-center space-x-2 py-3 px-6">
                <span className="w-6 h-6 rounded-full bg-black flex items-center justify-center text-white text-xs">
                  3
                </span>
                <span>Visión</span>
              </button>
              <button className="flex items-center justify-center space-x-2 py-3 px-6">
                <span className="w-6 h-6 rounded-full bg-black flex items-center justify-center text-white text-xs">
                  4
                </span>
                <span>Valores</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair text-center mb-16">
            ¿Por qué elegirnos?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-full bg-[#d69c4f] flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 16a6 6 0 1 1 6-6 6 6 0 0 1-6 6z"></path>
                  <path d="M12 8a4 4 0 1 0 4 4 4 4 0 0 0-4-4zm0 6a2 2 0 1 1 2-2 2 2 0 0 1-2 2z"></path>
                </svg>
              </div>
              <h3 className="text-sm font-medium mb-1">Ubicación</h3>
              <p className="text-xs">estratégica</p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-full bg-[#d69c4f] flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </div>
              <h3 className="text-sm font-medium mb-1">Experiencia en</h3>
              <p className="text-xs">eventos</p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-full bg-[#d69c4f] flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h3 className="text-sm font-medium mb-1">atención</h3>
              <p className="text-xs">personalizada</p>
            </div>

            {/* Feature 4 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-full bg-[#d69c4f] flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
                  <line x1="12" y1="18" x2="12.01" y2="18"></line>
                </svg>
              </div>
              <h3 className="text-sm font-medium mb-1">Infraestructura</h3>
              <p className="text-xs">Moderna</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Same as homepage */}
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

      {/* Footer - Same as homepage */}
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
