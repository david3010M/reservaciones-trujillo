import Image from "next/image";
import { Button } from "./ui/button";

export default function AboutUs() {
  return (
    <section className="py-24 bg-hotel-lightBeige -mt-8">
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="relative flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2 relative hidden md:block">
            <div className="relative h-full mb-4">
              <Image
                src="/home/welcome1.svg"
                alt="Hotel lobby"
                fill
                className="object-cover rounded-md"
              />
              <div className="relative h-2/5 w-1/2 left-[65%] bottom-[10%] border-8 border-hotel-lightBeige rounded-lg bg-hotel-lightBeige">
                <Image
                  src="/home/welcome2.svg"
                  alt="Hotel room"
                  fill
                  className="object-cover rounded-lg w-full h-full"
                />
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <div className="flex gap-2 items-center mb-4 ml-[10%]">
              <Image
                src={"/icons/arrow-right.svg"}
                alt="arrow-right"
                width={36}
                height={36}
              ></Image>
              <span className="text-hotel-gold uppercase text-sm">Nosotros</span>
            </div>
            <h2 className="text-4xl font-playfair mb-6 ml-[10%]">
              Bienvenido a<br />
              Recepciones Trujillo
            </h2>
            <div className="text-justify">
              <p className="text-sm mb-4">
                Combina hospitalidad y organización de eventos en Trujillo,
                Perú. Ofrecemos hospedaje confortable con habitaciones modernas
                y servicios como Wi-Fi, aire acondicionado y desayuno incluido.
                Nuestra ubicación estratégica cerca de la Plaza de Armas
                facilita el acceso a la riqueza cultural de la ciudad. Contamos
                con salones versátiles para bodas, conferencias y celebraciones,
                respaldados por un equipo experto en gastronomía, decoración y
                logística. <strong>Desde 2020</strong>, nos destacamos por
                brindar atención personalizada y experiencias inolvidables,
                garantizando comodidad y excelencia en cada detalle.
              </p>
            </div>
            <Button className="bg-hotel-gold text-white py-2 px-6 rounded-md text-sm" ripple="dark">
              Saber más
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
