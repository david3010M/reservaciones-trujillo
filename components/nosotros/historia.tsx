"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export const dynamic = "force-dynamic";
type Section = "historia" | "mision" | "vision" | "valores";

export default function QuienesSomos() {
  const [section, setSection] = useState<Section>("historia");
  const handleButtonClick = (section: Section) => {
    setSection(section);
  };

  const sections = {
    historia: {
      title: "Historia",
      value: "historia",
      image: "/nosotros/historia.jpg",
      content: (
        <div className="text-sm text-justify space-y-2">
          <p>
            <strong>Hotel Recepciones Trujillo</strong> nació con el firme
            propósito de brindar a los visitantes de la ciudad de Trujillo un
            espacio acogedor, elegante y funcional, donde el buen servicio y la
            hospitalidad sean el sello distintivo.
          </p>

          <p>
            Fundado en el <strong>2023</strong>, el hotel fue concebido como un
            proyecto familiar que buscaba unir dos pasiones: el arte de recibir
            y la organización de momentos inolvidables. Con esfuerzo, visión y
            dedicación, se consolidó una propuesta de valor que combina cómodas
            habitaciones con servicios integrales para recepciones, eventos
            sociales y corporativos.
          </p>
          <p>
            Ubicado en una de las zonas más accesibles de{" "}
            <strong>Trujillo</strong>, el hotel ha crecido con el tiempo sin
            perder la esencia de su atención cálida y personalizada.
          </p>
          <p>
            A lo largo de los años, Hotel Recepciones Trujillo ha ampliado su
            infraestructura, diversificado sus servicios y capacitado
            constantemente a su personal, con el objetivo de ofrecer
            experiencias memorables que reflejen los valores de calidad,
            compromiso y responsabilidad.
          </p>
          <p>
            Hoy, seguimos trabajando con pasión para seguir siendo parte de los
            momentos importantes de nuestros clientes: ya sea una estadía
            placentera, una boda soñada o un evento corporativo exitoso.
          </p>
        </div>
      ),
    },
    mision: {
      title: "Misión",
      value: "mision",
      image: "/nosotros/mision.jpg",
      content: (
        <div className="space-y-4 text-justify">
          <p>
            Brindar a nuestros huéspedes y clientes una experiencia única de
            hospitalidad, comodidad y atención personalizada, a través de
            servicios de alojamiento y organización de recepciones que superen
            sus expectativas.
          </p>
          <p>
            Nos enfocamos en ofrecer calidad, puntualidad y calidez,
            garantizando un ambiente seguro y agradable en cada estancia o
            celebración.
          </p>
        </div>
      ),
    },
    vision: {
      title: "Visión",
      value: "vision",
      image: "/nosotros/vision.jpg",
      content: (
        <div className="text-justify space-y-4">
          <p>
            Ser reconocidos como uno de los hoteles líderes en Trujillo en
            servicios de hospedaje y recepciones, destacando por nuestra
            excelencia operativa, innovación y compromiso con la satisfacción
            del cliente.
          </p>
          <p>
            Aspiramos a consolidarnos como la primera opción para quienes buscan
            calidad, confianza y momentos memorables en la ciudad.
          </p>
        </div>
      ),
    },
    valores: {
      title: "Valores",
      value: "valores",
      image: "/nosotros/valores.jpg",
      content: (
        <div>
          <div className="gap-x-8 gap-y-4 text-sm grid grid-cols-1 md:grid-cols-2 text-justify">
            <div>
              <p className="text-base font-semibold text-hotel-brown">Calidad</p>
              <p>
                Nos esforzamos por ofrecer un servicio impecable en todos
                nuestros espacios y procesos, garantizando confort, limpieza y
                excelencia en cada detalle.
              </p>
            </div>
            <div>
              <p className="text-base font-semibold text-hotel-brown">Atención al cliente</p>
              <p>
                La satisfacción de nuestros huéspedes y clientes es nuestra
                prioridad. Brindamos un trato cálido, respetuoso y personalizado
                en todo momento.
              </p>
            </div>
            <div>
              <p className="text-base font-semibold text-hotel-brown">Responsabilidad</p>
              <p>
                Cumplimos con nuestros compromisos con integridad y seriedad,
                tanto frente a nuestros clientes como a nuestros colaboradores y
                proveedores.
              </p>
            </div>
            <div>
              <p className="text-base font-semibold text-hotel-brown">Compromiso</p>
              <p>
                Damos lo mejor de nosotros en cada tarea, con pasión y
                dedicación, buscando siempre superar las expectativas de quienes
                confían en nuestros servicios.
              </p>
            </div>
            <div>
              <p className="text-base font-semibold text-hotel-brown">Innovación</p>
              <p>
                Nos adaptamos a las nuevas tendencias del sector hotelero y de
                eventos, incorporando mejoras continuas que enriquezcan la
                experiencia de nuestros clientes.
              </p>
            </div>
            <div>
              <p className="text-base font-semibold text-hotel-brown">Trabajo en equipo</p>
              <p>
                Fomentamos un ambiente de colaboración y respeto entre todos los
                miembros del equipo, lo que nos permite brindar un servicio
                coordinado, eficiente y humano.
              </p>
            </div>
          </div>
        </div>
      ),
    },
  };

  return (
    <div className="max-w-screen-lg mx-auto py-12 px-4 md:px-6 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-16 items-center border border-hotel-gold min-h-96 p-8">
        <div className="flex flex-col items-center justify-start h-full col-span-3">
          <div className="w-full">
            <h2 className="text-3xl font-playfair mb-4 border-b-2 border-hotel-gold text-hotel-gold">
              {sections[section].title}
            </h2>
          </div>
          <div className="font-canada">{sections[section].content}</div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={section}
            initial={{ x: 100, y: 100, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            exit={{ x: -100, y: -100, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="relative w-full rounded-sm overflow-hidden shadow-lg order-first lg:order-last col-span-2"
            style={{ aspectRatio: "1 / 1" }}
          >
            <Image
              src={sections[section].image}
              alt={`Imagen ${sections[section].title}`}
              fill
              className="object-cover border-white border-2 shadow-sm"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mb-8">
        <div className="bg-hotel-darkBeige rounded-full flex max-w-2xl mx-auto overflow-auto hiddenScroll transparentScroll">
          {Object.entries(sections).map(([key, { title }], index) => (
            <Button
              key={key}
              size="lg"
              className="w-full flex items-center justify-center space-x-2 py-8 px-6 rounded-full cursor-pointer no-ripple"
              variant={
                section === key ||
                index <= Object.keys(sections).indexOf(section)
                  ? "default"
                  : "ghost"
              }
              onClick={() => handleButtonClick(key as Section)}
            >
              <span
                className={cn(
                  "min-w-6 min-h-6 rounded-full flex items-center justify-center text-hotel-beige text-xs font-bold",
                  section === key ||
                    index <= Object.keys(sections).indexOf(section)
                    ? "bg-foreground text-primary"
                    : "bg-muted text-hotel-darkBeige"
                )}
              >
                {index + 1}
              </span>
              <span
                className={cn(
                  "",
                  section === key ||
                    index <= Object.keys(sections).indexOf(section)
                    ? "text-foreground"
                    : "text-muted"
                )}
              >
                {title}
              </span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
