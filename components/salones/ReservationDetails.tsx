"use client";

import {CalendarIcon, Check} from "lucide-react";
import {Calendar} from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import {format} from "date-fns";
import {SalonResponseData, SalonResponseDataPaquetes} from "@/components/salones/lib/salon.interface";
import {es} from "date-fns/locale";
import {Input} from "@/components/ui/input";
import useReservaSalonStore from "@/components/salones/lib/reservaSalon.store";

interface Props {
    salon: SalonResponseData;
    packageSalon: SalonResponseDataPaquetes;
}

export default function ReservationDetails({salon, packageSalon}: Props) {
    const {dateFrom, setDateFrom, people, setPeople} = useReservaSalonStore();


    return (
        <div className="col-start-1 row-start-2 md:col-span-2 md:row-start-2">

            <div className="mb-8">
                <h3 className="text-lg font-bold font-poppins mb-4">
                    Detalles de su reserva
                </h3>

                <div className="grid grid-cols-1 gap-8 mb-6">
                    <div className="border-l-2 border-hotel-gold pl-2">
                        <h4 className="font-bold font-poppins mb-2">Fecha</h4>

                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant={"secondary"}
                                    className={cn(
                                        "w-[280px] justify-start text-left font-normal ripple-lg",
                                        !dateFrom && "text-muted-foreground"
                                    )}
                                >
                                    <CalendarIcon className="mr-2 h-4 w-4"/>
                                    {dateFrom ? format(dateFrom, "dd MMMM yyyy", {locale: es}) :
                                        <span>Selecciona una fecha</span>}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                                <Calendar
                                    mode="single"
                                    fromDate={new Date()}
                                    selected={dateFrom}
                                    onSelect={(date) => setDateFrom(date ?? new Date())}
                                    initialFocus
                                />
                            </PopoverContent>
                        </Popover>
                    </div>
                    <div className="border-l-2 border-hotel-gold pl-2">
                        <h4 className="font-bold font-poppins mb-2">Cantidad de Personas</h4>

                        <Input
                            type="number"
                            value={people}
                            onChange={(e) => setPeople(Number(e.target.value))}
                            className="w-[280px] text-center text-lg font-bold border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-hotel-gold focus:border-hotel-gold"
                        />
                    </div>
                </div>

                <ul className="mb-4">
                    <li className="flex items-center mb-2">
                        <Check className="h-4 w-4 mr-2 text-hotel-gold"/>
                        <span>Seleccionó 1 Salón</span>
                    </li>
                    <li className="flex items-center mb-2">
                        <Check className="h-4 w-4 mr-2 text-hotel-gold"/>
                        <span>Para {people} {people > 1 ? "personas" : "persona"}</span>
                    </li>
                    <li className="flex items-center mb-2">
                        <Check className="h-4 w-4 mr-2 text-hotel-gold"/>
                        <span>
                            {salon.titulo} - {packageSalon?.nombre}
                        </span>
                    </li>
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
                        <span>Precio de Paquete</span>
                        <div>
                            <span>S/ {packageSalon.precio}</span>
                        </div>
                    </div>
                    <div className="flex justify-between font-medium">
                        <span>Importe Total A Pagar</span>
                        <span className="text-lime-600 font-bold">
                          S/ {(Number(packageSalon.precio) * people).toFixed(2)}
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
                    <Check className="h-5 w-5 mr-2 text-hotel-gold"/>
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
