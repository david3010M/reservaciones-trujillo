import Image from "next/image";
import Title from "@/components/title";
import { getSalones } from "@/components/salones/lib/salon.actions";
import { BASE_URL } from "@/lib/config";
import { Button } from "@/components/ui/button";
import * as LucideReact from "lucide-react";
import Link from "next/link";
import { ScrollToButton } from "@/components/ButtonForScroll";

export const dynamic = "force-dynamic";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ({ params }: PageProps) {
  const { id } = await params;

  // const salon = await getSalon(id);

  const salones = await getSalones();
  const salon = salones?.data.find((salon) => salon.id.toString() === id);

  if (!salon) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-playfair mb-4">Salón no encontrado</h1>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen">
      <Title
        title="Salones de Eventos"
        description="Contamos con salones modernos y equipados para la realización de eventos sociales y corporativos, garantizando un servicio impecable y una experiencia inolvidable."
      />
      {/* Reception Hall Section */}
      <section className="py-16 max-w-6xl mx-auto">
        <h2 className="text-5xl mb-12 font-marcellus">
          <span className="text-primary">Nuestro</span> {salon.titulo}
        </h2>

        <div className="flex items-center gap-8">
          <div className="w-1/2 text-right">
            <p className="mb-6 md:text-xl">{salon.descripcion_larga}</p>
            <ScrollToButton
              className="bg-hotel-brown rounded-none text-white px-6 py-3 uppercase"
              targetId={"package-section"}
            >
              Reservar ahora
            </ScrollToButton>
          </div>
          <div className="w-1/2">
            <Image
              src={`${BASE_URL}/${salon.imagen}`}
              alt="Salón de recepciones"
              width={600}
              height={400}
              className="rounded-md"
            />
          </div>
        </div>
      </section>

      {/* Event Types Section */}
      {/* SERVICIOS */}
      <section className="py-12 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 gap-16">
          {/* Left Column */}
          <div>
            {salon.servicios.slice(0, 2).map((servicio, idx) => {
              const Icon = LucideReact[
                servicio.icono
              ] as React.ComponentType<any>;
              return (
                <div className="mb-12 flex items-start gap-4" key={idx}>
                  <div className="flex justify-center mb-4">
                    {Icon && <Icon className="size-8 text-hotel-gold" />}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-poppins uppercase tracking-widest mb-4">
                      {servicio.titulo}
                    </h3>
                    <p className="text-gray-600">{servicio.descripcion}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column */}
          <div>
            {salon.servicios.slice(2).map((servicio, idx) => {
              const Icon = LucideReact[
                servicio.icono
              ] as React.ComponentType<any>;
              return (
                <div className="mb-12 flex items-start gap-4" key={idx}>
                  <div className="flex justify-center mb-4">
                    {Icon && <Icon className="size-8 text-hotel-gold" />}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-poppins tracking-widest uppercase mb-4">
                      {servicio.titulo}
                    </h3>
                    <p className="text-gray-600">{servicio.descripcion}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-12 max-w-6xl mx-auto" id="package-section">
        <h2 className="text-3xl text-center font-medium font-marcellus mb-12">
          <span className="text-hotel-brown">Tipos de paquetes</span>
        </h2>

        <div className="flex justify-center flex-wrap gap-8">
          {salon.paquetes.map((paquete, idx) => (
            <div className="text-center" key={idx}>
              <Image
                src={`${BASE_URL}/${paquete.imagen}`}
                alt={paquete.nombre}
                width={300}
                height={300}
                className="rounded-md mx-auto mb-4 object-cover aspect-[3/4]"
              />
              <h3 className="text-xl mb-2 tracking-widest">{paquete.nombre}</h3>
              <p className="text-hotel-brown font-roboto text-lg mb-4">
                S/ {paquete.precio}
              </p>
              <Link href={`/eventos/${id}/reservar/${paquete.id}`}>
                <Button className="bg-hotel-brown rounded-none text-white px-6 py-2 uppercase text-sm">
                  Reservar
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
