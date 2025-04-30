import Title from "@/components/title";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const eventosData = [
  {
    title: "Salón de Recepciones",
    description:
      "Ideal para bodas, aniversarios, cumpleaños y eventos familiares, con capacidad de hasta 300 personas.",
    imageAlt: "Salón de Recepciones",
    imageSrc: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Centro de Convenciones",
    description:
      "Espacio versátil para congresos, conferencias y reuniones empresariales.",
    imageAlt: "Centro de Convenciones",
    imageSrc: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Salas VIP",
    description:
      "Áreas privadas para eventos exclusivos, reuniones ejecutivas o celebraciones íntimas.",
    imageAlt: "Salas VIP",
    imageSrc: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Catering Personalizado",
    description:
      "Menús diseñados por chefs expertos con opciones a la medida del evento.",
    imageAlt: "Catering Personalizado",
    imageSrc: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Decoración y Ambientación",
    description:
      "Diseños personalizados para cada tipo de celebración, desde bodas elegantes hasta eventos temáticos.",
    imageAlt: "Decoración y Ambientación",
    imageSrc: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Equipamiento Audiovisual",
    description: "Pantallas, proyectores, micrófonos y sonido de alta calidad.",
    imageAlt: "Equipamiento Audiovisual",
    imageSrc: "/placeholder.svg?height=300&width=400",
  },
];

export default function EventosPage() {
  return (
    <main className="min-h-screen">
      {/* Eventos Header */}
      <Title
        title="Salones de Eventos"
        description="Contamos con salones modernos y equipados para la realización de eventos sociales y corporativos, garantizando un servicio impecable y una experiencia inolvidable."
      />

      {/* Eventos Grid */}
      <section className="py-16">
        <div className="max-w-screen-lg mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {eventosData.map((evento, index) => (
              <div
                key={index}
                className={`bg-white relative overflow-hidden shadow-md h-96 ${
                  index === 1 || index === 4 ? "md:mt-14" : ""
                }`}
              >
                <Image
                  src={evento.imageSrc}
                  alt={evento.imageAlt}
                  fill
                  className="object-cover"
                />
                <div
                  className={`p-6 h-full flex flex-col justify-end absolute bottom-0 ${
                    index === 1 || index === 4 ? "bg-hotel-gold/40" : ""
                  }`}
                >
                  <h2 className="text-2xl font-playfair font-bold text-center mb-6">
                    {evento.title}
                  </h2>
                  <p className="text-gray-600 text-sm font-poppins mb-4">
                    {evento.description}
                  </p>
                  <Button className="uppercase tracking-widest rounded-none ripple-lg">
                    Más detalles
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
