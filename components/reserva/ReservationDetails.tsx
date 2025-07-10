"use client";

import { Check } from "lucide-react";
import useReservaStore from "./lib/reserva.store";
import { HabitacionesDisponibleResponseData } from "../tipohabitacion/lib/habitacionesdisponible.interface";

interface Props {
  room: HabitacionesDisponibleResponseData;
}

export default function ReservationDetails({ room }: Props) {
  const { dateFrom, dateTo, people, getNights, habitacionId } =
    useReservaStore();

  const habitacion = room.habitaciones.find(
    (habitacion) => habitacion.id === habitacionId
  );

  const nights = getNights();

  const formatDate = (date: Date) => {
    const months = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
  };

  return (
    <div className="col-start-1 row-start-2 md:col-span-2 md:row-start-2">
      <div className="mb-8">
        <h3 className="text-lg font-bold font-poppins mb-4">
          Detalles de su reserva
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          <div className="border-l-2 border-hotel-gold pl-2">
            <h4 className="font-bold font-poppins mb-2">CHECK IN</h4>
            <p>
              {formatDate(dateFrom)} <strong>desde 14:00</strong>
            </p>
          </div>
          <div className="border-l-2 border-hotel-gold pl-2">
            <h4 className="font-bold font-poppins mb-2">CHECK OUT</h4>
            <p>
              {formatDate(dateTo)} <strong>hasta 12:00</strong>
            </p>
          </div>
        </div>

        <ul className="mb-4">
          <li className="flex items-center mb-2">
            <Check className="h-4 w-4 mr-2 text-hotel-gold" />
            <span>
              Se Alojará {nights} {nights > 1 ? "Noches" : "Noche"}
            </span>
          </li>
          <li className="flex items-center mb-2">
            <Check className="h-4 w-4 mr-2 text-hotel-gold" />
            <span>En {habitacion?.numero}</span>
          </li>
          <li className="flex items-center mb-2">
            <Check className="h-4 w-4 mr-2 text-hotel-gold" />
            <span>Seleccionó 1 Habitación Para:</span>
          </li>
          <li className="ml-6 mb-1">{people} Adultos</li>
          {/* <li className="ml-6 mb-1">0 Niños</li>
          <li className="ml-6">0 Bebés</li> */}
        </ul>
      </div>

      {/* Payment Summary Section */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold font-poppins mb-4">
          Información De Pago
        </h3>

        <h4 className="font-bold font-poppins text-xl mb-2">
          Su Resumen De Precios
        </h4>

        <div className="border-t border-b border-gray-200 py-4 mb-4">
          <div className="flex justify-between mb-2 font-bold text-lg">
            <span>Precio Original</span>
            <div>
              <span>S/{room.tipohabitacion.precio}</span>{" "}
              <span className="text-muted">
                {nights} {nights > 1 ? "Noches" : "Noche"}
              </span>
            </div>
          </div>
          {/* <div className="flex justify-between mb-2">
            <span>Descuento</span>
            <span className="text-red-500">S/{0}</span>
          </div> */}
          <div className="flex justify-between font-medium">
            <span>Importe Total A Pagar</span>
            <span className="text-lime-600 font-bold">
              S/{(Number(room.tipohabitacion.precio) * nights).toFixed(2)}
            </span>
          </div>
        </div>
      </div>

      {/* Cancellation Policy */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold font-poppins mb-4">
          Política de Cancelación
        </h3>

        <div className="flex items-start mb-2">
          <Check className="h-5 w-5 mr-2 text-hotel-gold" />
          <div>
            <p className="font-bold">Cancelación Gratuita</p>
            <p className="text-sm">
              Cancelar/Reprogramar A Más Tardar 24 Horas Antes, De Lo Contrario
              Pagará El 80% Del Costo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
