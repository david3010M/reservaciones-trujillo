import Image from "next/image";

export default function Contact() {
  return (
    <section className="py-8 bg-[#f0e9df]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="flex justify-center items-center gap-4 mb-4">
            <Image
              src={"/icons/arrow-left.svg"}
              alt="arrow-right"
              width={36}
              height={36}
            ></Image>
            <span className="text-hotel-gold uppercase font-medium">
              Contáctanos
            </span>
            <Image
              src={"/icons/arrow-right.svg"}
              alt="arrow-right"
              width={36}
              height={36}
            ></Image>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl text-center font-playfair mb-6">
              CONTACTO
            </h2>
            <form>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Nombre completo*"
                  className="w-full p-3 bg-hotel-darkBeige rounded-md border-none"
                />
              </div>
              <div className="mb-4 flex gap-4">
                <input
                  type="text"
                  placeholder="Teléfono*"
                  className="w-1/2 p-3 bg-hotel-darkBeige rounded-md border-none"
                />
                <select className="w-1/2 p-3 bg-hotel-darkBeige rounded-md border-none appearance-none">
                  <option>Tipo de servicio</option>
                </select>
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Email*"
                  className="w-full p-3 bg-hotel-darkBeige rounded-md border-none"
                />
              </div>
              <div className="mb-4">
                <textarea
                  placeholder="Escribe tu mensaje aquí"
                  className="w-full p-3 bg-hotel-darkBeige rounded-md border-none h-24"
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
                src="/home/catedral.png"
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
