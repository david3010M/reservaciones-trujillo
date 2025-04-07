import Image from "next/image";

export default function Footer() {
  return (
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
  );
}
