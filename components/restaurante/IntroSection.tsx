import Image from "next/image";

export default function IntroSection() {
  return (
    <section className="py-4 pt-8 md:py-8 md:pt-16">
      <div className="max-w-screen-xl mx-auto px-4">
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
            <RestaurantInfoCard />
          </div>
        </div>
      </div>
    </section>
  );
}

import { MapPin, Clock, Utensils, Phone, Mail, Info } from "lucide-react";

function RestaurantInfoCard() {
  return (
    <div className="bg-white rounded-none shadow-sm p-6 md:p-8 border border-gray-200 max-w-3xl mx-auto">
      <h2 className="text-2xl font-extrabold text-primary mb-4">
        Recepciones Trujillo Restaurante
      </h2>

      <p className="text-gray-700 mb-6">
        Una opción diferente con estilo contemporáneo donde encontrarás una
        propuesta variada de platos saludables y únicos.
      </p>

      <ul className="space-y-3 text-sm text-gray-800">
        <li className="flex gap-2">
          <Info className="min-w-5 h-5 text-primary" />
          <span>
            <span className="font-medium">Tipo de atención:</span> Propuesta
            gastronómica contemporánea
          </span>
        </li>
        <li className="flex gap-2">
          <Utensils className="min-w-5 h-5 text-primary" />
          <span>
            <span className="font-medium">Tipo de comida:</span> Peruana fusión
          </span>
        </li>
        <li className="flex gap-2">
          <Clock className="min-w-5 h-5 text-primary" />
          <span>
            <span className="font-medium">Horario:</span> 06:00 a.m. - 10:00
            a.m. y 12:30 m - 10:00 p.m.
          </span>
        </li>
        <li className="flex gap-2">
          <MapPin className="min-w-5 h-5 text-primary" />
          <span>
            <span className="font-medium">Dirección:</span> Av. Tahuantinsuyo
            814 – La Esperanza - Trujillo
          </span>
        </li>
        <li className="flex gap-2">
          <Mail className="min-w-5 h-5 text-primary" />
          <span>
            <span className="font-medium">Correo:</span>{" "}
            <a
              href="mailto:reservas@hotelrecepcionestrujillo.com"
              className="underline text-blue-600"
            >
              reservas@hotelrecepcionestrujillo.com
            </a>
          </span>
        </li>
        <li className="flex gap-2">
          <Phone className="min-w-5 h-5 text-primary" />
          <span>
            <span className="font-medium">Teléfono:</span> 906250017
          </span>
        </li>
      </ul>
    </div>
  );
}
