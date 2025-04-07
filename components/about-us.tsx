import Image from "next/image";

export default function AboutUs() {
  return (
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
              <span className="text-[#d69c4f] uppercase text-sm">Nosotros</span>
            </div>
            <h2 className="text-3xl font-playfair mb-6">
              Bienvenido a<br />
              Recepciones Trujillo
            </h2>
            <p className="text-sm mb-4">
              Conozca Recepciones Trujillo, un emblema de elegancia en Trujillo,
              Perú. Ofrecemos alojamiento de alta calidad con instalaciones
              modernas y servicios personalizados. Nuestras habitaciones y
              ambientes incluyen nuestra decoración vanguardista cerca de la
              Plaza de Armas Trujillo, el centro histórico y cultural de la
              ciudad.
            </p>
            <p className="text-sm mb-4">
              Nuestros salones versátiles para bodas, conferencias y
              celebraciones, administrados por un equipo experto en gastronomía,
              decoración y logística.
            </p>
            <p className="text-sm mb-6">
              <strong>Desde 2015</strong> nos destacamos por brindar atención
              personalizada y experiencias inolvidables, garantizando comodidad
              y elegancia en cada detalle.
            </p>
            <button className="bg-[#d69c4f] text-white py-2 px-6 rounded-md text-sm">
              Saber más
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
