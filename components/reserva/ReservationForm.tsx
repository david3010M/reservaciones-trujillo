import { Edit2, User } from "lucide-react";
import Link from "next/link";

export default function ReservationForm({ id }: { id: string }) {
  return (
    <div className="col-start-1 row-start-3 md:col-span-3 md:row-span-2 md:col-start-3">
      <div className="bg-white rounded-md">
        {/* User Information Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="bg-[#d69c4f] rounded-full w-10 h-10 flex items-center justify-center text-white mr-3">
                <User className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold font-poppins">
                  Noely Mascol Montestruque
                </h3>
                <p className="text-sm text-gray-500">noely@gmail.com</p>
              </div>
            </div>
            <button className="text-[#d69c4f] flex items-center text-sm">
              <Edit2 className="h-4 w-4 mr-1" />
              Editar Perfil
            </button>
          </div>

          <h3 className="text-2xl font-poppins font-bold mb-2">
            Ingrese Su Información
          </h3>
          <p className="text-sm mb-4">
            Asegúrese de que la información que ya ha escrito en su perfil sea
            correcta.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm mb-1">Nombres *</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="Nombres"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Apellido paterno *</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="Apellido paterno"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Apellido materno *</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="Apellido materno"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="Email"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Número Móvil</label>
              <div className="flex">
                <div className="border border-gray-300 rounded-l-md p-2 bg-gray-50 flex items-center">
                  <span className="text-sm">🇵🇪</span>
                </div>
                <input
                  type="tel"
                  className="w-full border border-gray-300 rounded-r-md p-2"
                  placeholder="Número de teléfono"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Payment Information Section */}
        <div className="mb-8">
          <h3 className="text-lg font-medium mb-4">
            Información De La Tarjeta Bancaria
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm mb-1">Nombre En La Tarjeta</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="Nombre completo"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm mb-1">Número Tarjeta</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="XXXX XXXX XXXX XXXX"
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-sm mb-1">EXP Date</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md p-2"
                  placeholder="MM/YY"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">CVC</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md p-2"
                  placeholder="CVC"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Pay Button */}
        <Link
          href={`/habitaciones/${id}/reservar/confirmacion`}
          className="w-full bg-[#d69c4f] text-white py-3 rounded-md font-medium block text-center"
        >
          Pagar
        </Link>
      </div>
    </div>
  );
}
