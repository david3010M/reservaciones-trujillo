import Image from "next/image";

const features = [
  {
    src: "/nosotros/whyus/ubicacion.png",
    alt: "Ubicación estratégica",
    title: "Ubicación estratégica",
  },
  {
    src: "/nosotros/whyus/experiencia.png",
    alt: "Experiencia en eventos",
    title: "Experiencia en eventos",
  },
  {
    src: "/nosotros/whyus/atencion.png",
    alt: "Atención personalizada",
    title: "Atención personalizada",
  },
  {
    src: "/nosotros/whyus/infraestructura.png",
    alt: "Infraestructura moderna",
    title: "Infraestructura Moderna",
  },
];

export default function WhyUsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-poppins font-bold playfair text-center mb-16">
          ¿Por qué elegirnos?
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-full bg-[#d69c4f] flex items-center justify-center mb-4">
                <Image
                  src={feature.src}
                  alt={feature.alt}
                  width={100}
                  height={100}
                  className="w-1/2 h-auto"
                />
              </div>
              <h3 className="text-lg font-light font-poppins mb-1 w-32">{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
