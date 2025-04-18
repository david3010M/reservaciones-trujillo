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
          <button className="bg-[#1b1b1b] text-white py-2 px-6 rounded-md text-sm">
            Reservar habitación
          </button>
          <button className="bg-[#1b1b1b] text-white py-2 px-6 rounded-md text-sm">
            Cotizar evento
          </button>
        </div>
      </div>
    </section>
  );
}
