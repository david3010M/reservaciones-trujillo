"use client";
import { format, parse } from "date-fns";
import { create } from "zustand";

interface ReservaState {
  dateFrom: Date;
  dateTo: Date;
  people: number;
  nights: number;
  getNights: () => number;
  setPeople: (people: number) => void;
  setDateFrom: (date: Date) => void;
  setDateTo: (date: Date) => void;
  initializeReserva: () => void;
}

const today = new Date();
const tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);

const useReservaStore = create<ReservaState>((set, get) => ({
  dateFrom: today,
  dateTo: tomorrow,
  people: 1, // inicial fijo
  nights: 1,
  getNights: () => {
    const { dateFrom, dateTo } = get();
    const diffTime = Math.abs(dateTo.getTime() - dateFrom.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  },
  setPeople: (people: number) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("people", people.toString());
    }
    set({ people });
  },
  setDateFrom: (date: Date) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("dateFrom", date.toISOString().slice(0, 10));
    }
    set({ dateFrom: date });
  },
  setDateTo: (date: Date) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("dateTo", date.toISOString().slice(0, 10));
    }
    set({ dateTo: date });
  },
  initializeReserva: () => {
    if (typeof window === "undefined") return;

    const storedPeople = localStorage.getItem("people");
    const storedDateFrom = localStorage.getItem("dateFrom");
    const storedDateTo = localStorage.getItem("dateTo");

    const dateFrom = storedDateFrom
      ? parse(storedDateFrom, "yyyy-MM-dd", new Date())
      : today;
    const dateTo = storedDateTo
      ? parse(storedDateTo, "yyyy-MM-dd", new Date())
      : tomorrow;
    const people = storedPeople ? Number(storedPeople) : 1;

    set({
      people,
      dateFrom,
      dateTo,
    });
  },
}));

export default useReservaStore;
