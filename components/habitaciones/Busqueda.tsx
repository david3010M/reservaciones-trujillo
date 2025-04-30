"use client";

import { useEffect, useState } from "react";
import useReservaStore from "../reserva/lib/reserva.store";
import useHabitacionStore from "../tipohabitacion/lib/tipohabitacion.store";
import { format, parse } from "date-fns";
import { ChevronDown, ChevronUp } from "lucide-react";
import Title from "@/components/title";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { es } from "date-fns/locale";
import { Button } from "@/components/ui/button";

export default function Busqueda() {
  const { dateFrom, dateTo, setDateFrom, setDateTo, people, setPeople } =
    useReservaStore();
  const { loadHabitaciones } = useHabitacionStore();

  useEffect(() => {
    const storedDateFrom = localStorage.getItem("dateFrom");
    const storedDateTo = localStorage.getItem("dateTo");

    if (storedDateFrom) {
      setDateFrom(parse(storedDateFrom, "yyyy-MM-dd", new Date()));
    }
    if (storedDateTo) {
      setDateTo(parse(storedDateTo, "yyyy-MM-dd", new Date()));
    }
  }, [setDateFrom, setDateTo]);

  useEffect(() => {
    loadHabitaciones();
  }, []);

  return (
    <div className="bg-hotel-beige p-6 lg:w-1/3 h-fit">
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-4 font-lato place-items-center">
        {["Ingreso", "Salida"].map((label, idx) => (
          <Popover key={idx}>
            <PopoverTrigger asChild className="w-full aspect-square">
              <Button className="w-full h-fit min-w-16 max-w-32 rounded-none p-1 sm:p-4 flex flex-col items-center gap-0.5 sm:gap-4 aspect-square">
                <span className="block text-[9px] sm:text-xs uppercase tracking-widest">
                  {label}
                </span>
                {idx === 0 && dateFrom ? (
                  <div className="flex gap-2">
                    <span className="text-6xl font-thin">
                      {format(dateFrom, "dd", { locale: es })}
                    </span>
                    <div className="flex flex-col items-center justify-center">
                      <span className="text-sm">
                        {format(dateFrom, "MMM", { locale: es })
                          .charAt(0)
                          .toUpperCase() +
                          format(dateFrom, "MMM", {
                            locale: es,
                          }).slice(1)}
                      </span>
                      <ChevronDown className="max-h-3 max-w-3" />
                    </div>
                  </div>
                ) : idx === 1 && dateTo ? (
                  <div className="flex gap-2">
                    <span className="text-6xl font-thin">
                      {format(dateTo, "dd", { locale: es })}
                    </span>
                    <div className="flex flex-col items-center justify-center">
                      <span className="text-sm">
                        {format(dateTo, "MMM", { locale: es })
                          .charAt(0)
                          .toUpperCase() +
                          format(dateTo, "MMM", {
                            locale: es,
                          }).slice(1)}
                      </span>
                      <ChevronDown className="max-h-3 max-w-3" />
                    </div>
                  </div>
                ) : (
                  <span className="text-sm">Selecciona una fecha</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                fromDate={new Date()}
                mode="range"
                selected={{ from: dateFrom, to: dateTo }}
                onSelect={(range) => {
                  if (range?.from) setDateFrom(range.from);
                  if (range?.to) setDateTo(range.to);
                  if (range?.from) {
                    loadHabitaciones(format(range.from, "yyyy-MM-dd"));
                  }
                }}
                initialFocus
                numberOfMonths={2}
              />
            </PopoverContent>
          </Popover>
        ))}

        <div className="bg-primary text-primary-foreground w-full h-fit min-w-16 min-h-16 max-w-32 max-h-32 rounded-none p-1 sm:p-4 flex flex-col items-center justify-center gap-0.5 sm:gap-4 aspect-square">
          <span className="block text-[9px] sm:text-xs uppercase tracking-widest">
            Personas
          </span>
          <div className="flex gap-2">
            <span className="text-6xl font-thin">{people}</span>
            <div className="flex flex-col gap-2 items-center justify-center">
              <Button
                size="icon"
                onClick={() => setPeople(people + 1)}
                className="p-2 max-h-6 max-w-6"
                disabled={people >= 5}
              >
                <ChevronUp className="max-h-4 max-w-4" />
              </Button>
              <Button
                size="icon"
                onClick={() => setPeople(people - 1)}
                className="p-2 max-h-6 max-w-6"
                disabled={people <= 1}
              >
                <ChevronDown className="max-h-4 max-w-4" />
              </Button>
            </div>
          </div>
        </div>
        <div className="bg-primary text-primary-foreground w-full h-fit min-w-16 min-h-16 max-w-32 max-h-32 rounded-none p-1 sm:p-4 flex flex-col items-center justify-center gap-0.5 sm:gap-4 aspect-square">
          <span className="block text-[9px] sm:text-xs uppercase tracking-widest">
            Noches
          </span>
          <span className="text-6xl font-thin">
            {dateFrom && dateTo
              ? Math.max(
                  1,
                  Math.ceil(
                    (dateTo.getTime() - dateFrom.getTime()) /
                      (1000 * 60 * 60 * 24)
                  )
                )
              : 0}
          </span>
        </div>
      </div>
    </div>
  );
}
