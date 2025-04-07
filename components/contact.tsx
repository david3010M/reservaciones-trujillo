import Image from "next/image";

export default function Contact() {
  return (
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
  );
}
