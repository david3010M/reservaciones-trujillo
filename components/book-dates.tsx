"use client";
import { CalendarIcon, MapPin } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { Calendar } from "./ui/calendar";
import { es } from "date-fns/locale";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Input } from "./ui/input";
import { TipoHabitacionResponse } from "./tipohabitacion/lib/tipohabitacion.interface";
import useReservaStore from "./reserva/lib/reserva.store";
import { useRouter } from "next/navigation";
import { NavigateOptions } from "next/dist/shared/lib/app-router-context.shared-runtime";

interface Props {
  tiposHabitacion: TipoHabitacionResponse;
}

export default function BookDates({ tiposHabitacion }: Props) {
  const { dateFrom, dateTo, setDateFrom, setDateTo } = useReservaStore();
  const { push } = useRouter();

  const searchHabitacion = () => {
    push("/habitaciones");
  };

  return (
    <section className="bg-white py-4 shadow-md relative -mt-12 mx-auto max-w-6xl rounded-md z-10">
      <div className="flex flex-col md:flex-row items-center justify-between px-4 gap-4">
        <div className="w-full">
          <Select>
            <SelectTrigger className="w-full border-none">
              <MapPin className="text-hotel-gold" />
              <SelectValue placeholder="Tipo de Recepción" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Tipo de Recepción</SelectLabel>
                {tiposHabitacion.data.length > 0 &&
                  tiposHabitacion.data.map((tipo) => (
                    <SelectItem key={tipo.id} value={tipo.nombre}>
                      {tipo.nombre}
                    </SelectItem>
                  ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex gap-2 justify-center">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"ghost"}
                className={cn(
                  "md:min-w-[240px] ripple-lg h-fit justify-start text-left font-normal",
                  !dateFrom && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="stroke-hotel-gold !size-8" />
                {dateFrom ? (
                  <div className="flex gap-2">
                    <span className="ml-2 text-3xl font-semibold">
                      {format(dateFrom, "dd", { locale: es })}
                    </span>
                    <div className="flex flex-col ml-2">
                      <span className="text-sm font-semibold uppercase">
                        {format(dateFrom, "MMM yy", { locale: es })}
                      </span>
                      <span className="text-xs text-gray-500 uppercase">
                        {format(dateFrom, "EEEE", { locale: es })}
                      </span>
                    </div>
                  </div>
                ) : (
                  <span className="ml-2 text-sm font-semibold">
                    Selecciona una fecha
                  </span>
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
                }}
                initialFocus
                numberOfMonths={2}
              />
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"ghost"}
                className={cn(
                  "md:min-w-[240px] ripple-lg h-fit justify-start text-left font-normal",
                  !dateTo && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="stroke-hotel-gold !size-8" />
                {dateTo ? (
                  <div className="flex gap-2">
                    <span className="ml-2 text-3xl font-semibold">
                      {format(dateTo, "dd", { locale: es })}
                    </span>
                    <div className="flex flex-col ml-2">
                      <span className="text-sm font-semibold uppercase">
                        {format(dateTo, "MMM yy", { locale: es })}
                      </span>
                      <span className="text-xs text-gray-500 uppercase">
                        {format(dateTo, "EEEE", { locale: es })}
                      </span>
                    </div>
                  </div>
                ) : (
                  <span className="ml-2 text-sm font-semibold">
                    Selecciona una fecha
                  </span>
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
                }}
                initialFocus
                numberOfMonths={2}
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className="flex items-center gap-2 w-full md:border-s">
          <Input
            type="text"
            placeholder="Ingresa tu código"
            className="flex-grow border-none !text-sm py-2 px-4"
          />
          <Button
            className="bg-hotel-gold text-white py-2 px-6 rounded-md"
            onClick={searchHabitacion}
          >
            Buscar
          </Button>
        </div>
      </div>
    </section>
  );
}
