"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";

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
        <div className="text-sm text-justify">
          <p className="mb-6">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before final copy is available.
          </p>
        </div>
      ),
    },
    mision: {
      title: "Misión",
      value: "mision",
      image: "/nosotros/mision.jpg",
      content: (
        <div>
          <p className="text-sm">
            Brindar servicios de hospedaje y organización de eventos con altos
            estándares de calidad, garantizando experiencias únicas y
            satisfactorias para nuestros clientes. Nos dirigimos a viajeros de
            negocios, turistas, familias y empresas que buscan un servicio
            confiable, cómodo y exclusivo. Nos enfocamos en ofrecer atención
            personalizada, comodidad y excelencia en cada detalle, contribuyendo
            al desarrollo turístico y empresarial de Trujillo
          </p>
        </div>
      ),
    },
    vision: {
      title: "Visión",
      value: "vision",
      image: "/nosotros/vision.jpg",
      content: (
        <div>
          <p className="text-sm">
            Ser el hotel y centro de recepciones líder en Trujillo, reconocido
            por nuestra excelencia en servicio, innovación y compromiso con la
            satisfacción del cliente. Aspiramos a expandir nuestra oferta y
            consolidarnos como un referente en la industria hotelera y de
            eventos a nivel regional y nacional.
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
          <p className="text-xs">
            Los valores corporativos son los principios fundamentales que guían
            el comportamiento y la toma de decisiones de una empresa.
            Representan las creencias, ética y cultura organizacional que
            definen la identidad y personalidad de la compañía.
          </p>
          <ul className="space-y-4 text-xs mb-6 list-none pl-0">
            {[
              {
                description:
                  "La amabilidad es un valor esencial en Recepciones Trujillo, ya que contribuye a crear un ambiente acogedor y agradable para cada cliente.",
              },
              {
                description:
                  "La excelencia en recepciones y hoteles se logra a través de una atención al cliente impecable, infraestructura de calidad y una experiencia gastronómica de alto nivel.",
              },
              {
                description:
                  "La innovación es clave para el crecimiento y la diferenciación en cualquier sector. Representa la capacidad de crear, mejorar y adaptar soluciones que aporten valor y marquen la diferencia.",
              },
              {
                description:
                  "El compromiso es la base para ofrecer un servicio de calidad en recepciones y hoteles en Trujillo.",
              },
            ].map((value, index) => (
              <div key={index} className="flex items-start gap-4">
                {value.description}
              </div>
            ))}
          </ul>
        </div>
      ),
    },
  };

  return (
    <div className="max-w-screen-md mx-auto py-12 px-4 md:px-6 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-16 items-center border border-hotel-gold min-h-96 p-8">
        <div className="flex flex-col items-center justify-start h-full col-span-3">
          <div className="w-full">
            <h2 className="text-3xl font-playfair mb-4 border-b-2 border-hotel-gold text-hotel-gold">
              {sections[section].title}
            </h2>
          </div>
          <div className="font-canada">{sections[section].content}</div>
        </div>
        <div className="flex w-full relative rounded-sm overflow-hidden shadow-lg order-first lg:order-last col-span-2" style={{ aspectRatio: '1 / 1' }}>
          <Image
            src={sections[section].image}
            alt="Depósito Pakatnamú"
            fill
            className="object-cover border-white border-2 shadow-sm"
          />
        </div>
      </div>

      <div className="mb-8">
        <div className="bg-muted rounded-full flex max-w-2xl mx-auto overflow-auto hiddenScroll transparentScroll">
          {Object.entries(sections).map(([key, { title }], index) => (
            <Button
              key={key}
              size="lg"
              className="w-full flex items-center justify-center space-x-2 py-3 px-6 rounded-full cursor-pointer"
              variant={section === key ? "default" : "ghost"}
              onClick={() => handleButtonClick(key as Section)}
            >
              <span
                className={cn(
                  "w-6 h-6 rounded-full flex items-center justify-center text-background text-xs font-bold",
                  section === key ? "bg-muted text-primary" : "bg-secondary"
                )}
              >
                {index + 1}
              </span>
              <span className={cn("", section === key ? "font-bold" : "")}>
                {title}
              </span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
