"use client";

import { CalendarIcon, ChevronRight } from "lucide-react";
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

export default function BookDates() {
  const [fromDate, setOriginDate] = useState<Date | undefined>(new Date());
  const [toDate, setToDate] = useState<Date | undefined>(
    () => new Date(Date.now() + 86400000)
  );

  return (
    <section className="bg-white py-4 shadow-md relative -mt-20 mx-auto max-w-5xl rounded-md z-10">
      <div className="flex flex-col md:flex-row items-center justify-between px-4 gap-4">
        <div className="w-full md:w-1/4">
          <Select>
            <SelectTrigger className="w-full border-none">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
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
        <div className="w-full md:w-1/4 flex space-x-2">
          <input
            type="text"
            placeholder="Ingresa tu código"
            className="flex-grow border border-gray-300 rounded-md py-2 px-4"
          />
          <button className="bg-[#d69c4f] text-white py-2 px-6 rounded-md">
            Buscar
          </button>
        </div>
      </div>
    </section>
  );
}
