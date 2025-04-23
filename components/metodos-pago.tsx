import Image from "next/image";
import Link from "next/link";

export default function MetodosPago() {
  return (
    <section>
      <div className="bg-hotel-lightBeige py-8">
        <div className="max-w-screen-lg mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <p className="text-sm">
              Ubicanos en:{" "}
              <Link
                href="https://maps.app.goo.gl/fVx8asbgJ7MMudZY7"
                target="_blank"
                className="underline"
              >
                Av. Túpac Amaru 812 - Trujillo
              </Link>
            </p>
          </div>
          <div className="flex gap-8 items-center">
            <p className="font-medium">Medios de pago</p>
            <div className="flex gap-2 mt-2">
              <Image src="/icons/visa.png" alt="Visa" width={40} height={30} />
              <Image
                src="/icons/master.png"
                alt="Mastercard"
                width={40}
                height={30}
              />
              <Image
                src="/icons/american.png"
                alt="American Express"
                width={40}
                height={30}
              />
              <Image
                src="/icons/diners.png"
                alt="Diners Club"
                width={40}
                height={30}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
