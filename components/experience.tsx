import { Button } from "./ui/button";

export default function Experience() {
  return (
    <section className="py-8 bg-hotel-cream text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-medium mb-2 font-poppins uppercase text-hotel-gold">
          ¡ Vive una experiencia inolvidable con nosotros !
        </h2>
        <p className="mb-6">
          Reserva tu estadía o planifica tu evento perfecto con solo un click.
        </p>
        <div className="flex justify-center gap-4">
          <Button variant="secondary" ripple="gold">
            Reservar habitación
          </Button>
          <Button ripple="gold">Cotizar evento</Button>
        </div>
      </div>
    </section>
  );
}
