import Image from "next/image";

export default function Rooms() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-4">
          <div className="h-[1px] w-6 bg-[#d69c4f] mr-2"></div>
          <span className="text-[#d69c4f] uppercase text-sm">Habitaciones</span>
        </div>
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <h2 className="text-3xl font-playfair">
            NUESTRAS
            <br />
            HABITACIONES
          </h2>
          <p className="max-w-md text-sm">
            Our rooms offer a harmonious blend of comfort and elegance, designed
            to provide an exceptional stay for every guest. Each room features
            plush bedding, high-quality linens, and a selection of pillows to
            ensure a restful night's sleep.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Room 1 */}
          <div className="rounded-md overflow-hidden border border-gray-200">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=200&width=350"
                alt="Habitación Simple"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 bg-white">
              <h3 className="text-xl font-playfair mb-2">Habitación Simple</h3>
              <p className="text-sm text-gray-600">
                Habitación con cama individual, baño privado, TV, internet y
                comodidades.
              </p>
            </div>
          </div>
          {/* Room 2 */}
          <div className="rounded-md overflow-hidden border border-gray-200">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=200&width=350"
                alt="Habitación Doble"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 bg-white">
              <h3 className="text-xl font-playfair mb-2">Habitación Doble</h3>
              <p className="text-sm text-gray-600">
                Habitación con dos camas individuales, baño privado, TV,
                internet y comodidades.
              </p>
            </div>
          </div>
          {/* Room 3 */}
          <div className="rounded-md overflow-hidden border border-gray-200">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=200&width=350"
                alt="Habitación Matrimonial"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 bg-white">
              <h3 className="text-xl font-playfair mb-2">
                Habitación Matrimonial
              </h3>
              <p className="text-sm text-gray-600">
                Habitación con cama matrimonial, TV, internet, confort y
                comodidades.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
