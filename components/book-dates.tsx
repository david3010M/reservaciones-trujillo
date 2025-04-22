"use client";
import { CalendarIcon, ChevronRight, MapPin } from "lucide-react";
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

export default function BookDates() {
  const [fromDate, setOriginDate] = useState<Date | undefined>(new Date());
  const [toDate, setToDate] = useState<Date | undefined>(
    new Date(new Date().setDate(new Date().getDate() + 1))
  );

  useEffect(() => {
    if (fromDate && toDate && fromDate > toDate) {
      setToDate(fromDate);
    }
  }, [fromDate, toDate]);

  return (
    <section className="bg-white py-4 shadow-md relative -mt-12 mx-auto max-w-5xl rounded-md z-10">
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
                <SelectItem value="tipo1">Tipo 1</SelectItem>
                <SelectItem value="tipo2">Tipo 2</SelectItem>
                <SelectItem value="tipo3">Tipo 3</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"ghost"}
              className={cn(
                "w-[240px] h-fit justify-start text-left font-normal",
                !fromDate && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="stroke-hotel-gold !size-8" />
              {fromDate ? (
                <div className="flex gap-2">
                  <span className="ml-2 text-3xl font-semibold">
                    {format(fromDate, "dd")}
                  </span>
                  <div className="flex flex-col ml-2">
                    <span className="text-sm font-semibold uppercase">
                      {format(fromDate, "MMM yy")}
                    </span>
                    <span className="text-xs text-gray-500 uppercase">
                      {format(fromDate, "EEEE", { locale: es })}
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
              mode="single"
              selected={fromDate}
              onSelect={setOriginDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"ghost"}
              className={cn(
                "w-[240px] h-fit justify-start text-left font-normal",
                !toDate && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="stroke-hotel-gold !size-8" />
              {toDate ? (
                <div className="flex gap-2">
                  <span className="ml-2 text-3xl font-semibold">
                    {format(toDate, "dd")}
                  </span>
                  <div className="flex flex-col ml-2">
                    <span className="text-sm font-semibold uppercase">
                      {format(toDate, "MMM yy")}
                    </span>
                    <span className="text-xs text-gray-500 uppercase">
                      {format(toDate, "EEEE", { locale: es })}
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
              mode="single"
              selected={toDate}
              onSelect={setToDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
        <div className="flex items-center gap-2 w-full border-s">
          <Input
            type="text"
            placeholder="Ingresa tu código"
            className="flex-grow border-none !text-sm py-2 px-4"
          />
          <Button
            className="bg-hotel-gold text-white py-2 px-6 rounded-md"
            ripple="dark"
          >
            Buscar
          </Button>
        </div>
      </div>
    </section>
  );
}
