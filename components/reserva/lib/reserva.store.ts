"use client";
import { create } from "zustand";

interface ReservaState {
  dateFrom: Date;
  dateTo: Date;
  people: number;
  nights: number;
  setPeople: (people: number) => void;
  setDateFrom: (date: Date) => void;
  setDateTo: (date: Date) => void;
  initializeDates: () => void;
}

const today = new Date();
const tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);

const useReservaStore = create<ReservaState>((set) => ({
  dateFrom: today,
  dateTo: tomorrow,
  people:
    typeof window !== "undefined" && localStorage.getItem("people")
      ? Number(localStorage.getItem("people"))
      : 1,
  nights: Math.max(
    Math.ceil((tomorrow.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)),
    1
  ),
  setPeople: (people: number) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("people", people.toString());
      set({ people: Number(localStorage.getItem("people")) || 1 });
    } else {
      set({ people });
    }
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
  initializeDates: () => {
    if (typeof window !== "undefined") {
      const storedDateFrom = localStorage.getItem("dateFrom");
      const storedDateTo = localStorage.getItem("dateTo");

      set({
        dateFrom: storedDateFrom ? new Date(storedDateFrom) : today,
        dateTo: storedDateTo ? new Date(storedDateTo) : tomorrow,
      });
    }
  },
}));

export default useReservaStore;
