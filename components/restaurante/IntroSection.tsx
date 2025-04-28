import Image from "next/image";

export default function IntroSection() {
  return (
    <section className="py-4 pt-8 md:py-8 md:pt-16">
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="relative flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-2/3 relative flex flex-cl md:flex-row">
            <div className="relative mb-4 w-full h-full flex justify-center items-center">
              <Image
                src="/restaurante/1.jpg"
                alt="Hotel lobby"
                width={600} // Replace with the actual width of the image
                height={600} // Replace with the actual height of the image
                className="object-cover w-3/4 h-auto aspect-square"
              />
              <Image
                src="/restaurante/2.jpg"
                alt="Hotel room"
                width={250} // Replace with the actual width of the image
                height={150} // Replace with the actual height of the image
                // className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 right-0 w-1/4 h-auto object-cover"
                className="object-cover w-1/4 h-auto absolute right-0"
              />
            </div>
          </div>
          <div className="w-full md:w-1/3 flex pl-4 items-center ">
            <div className="text-justify">
              <p className="text-sm mb-4">
                Para quienes buscan una experiencia más íntima, nuestros
                comedores privados ofrecen el ambiente perfecto para
                celebraciones o reuniones de negocios. Y ninguna visita estaría
                completa sin degustar nuestros exquisitos postres, preparados
                con maestría por nuestro pastelero.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
