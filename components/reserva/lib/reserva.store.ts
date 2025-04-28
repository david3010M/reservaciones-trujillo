"use client";
import { create } from "zustand";

interface ReservaState {
  dateFrom: Date;
  dateTo: Date;
  setDateFrom: (date: Date) => void;
  setDateTo: (date: Date) => void;
}

const today = new Date();
const tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);

const useReservaStore = create<ReservaState>((set) => ({
  dateFrom: localStorage.getItem("dateFrom")
    ? new Date(localStorage.getItem("dateFrom")!)
    : today,
  dateTo: localStorage.getItem("dateTo")
    ? new Date(localStorage.getItem("dateTo")!)
    : tomorrow,
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
}));

export default useReservaStore;
