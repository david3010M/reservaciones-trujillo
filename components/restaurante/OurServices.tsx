import Image from "next/image";

export default function OurServices() {
  const services = [
    {
      title: "Atención Huéspedes",
      description:
        "Brindamos un servicio personalizado y de calidad para garantizar una experiencia inolvidable.",
      image: "/restaurante/services/1.jpg",
    },
    {
      title: "Atención Interna",
      description:
        "Nos enfocamos en mantener un ambiente organizado y eficiente para ofrecer el mejor servicio posible.",
        image: "/restaurante/services/2.jpg",
    },
  ];
  return (
    <section className="py-8 md:py-8">
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="flex flex-col items-start justify-center w-fit">
          <p className="text-lg text-center font-marcellus w-full">
            Tu mejor opción
          </p>
          <h2 className="text-3xl md:text-4xl mb-8 font-marcellus">
            <span className="text-primary">Nuestros</span> Servicios
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src={service.image}
                fill
                alt={service.title}
                className="object-cover"
              />
              <div className="absolute w-full h-full bg-black/40 text-white p-6 pt-10 flex flex-col justify-between items-center">
                <h3 className="text-xl font-marcellus">{service.title}</h3>
                <p className="text-base text-center font-marcellus">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
