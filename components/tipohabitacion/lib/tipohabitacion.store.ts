"use client";
import { create } from "zustand";
import { HabitacionesDisponibleResponse } from "./habitacionesdisponible.interface";
import { getHabitacionesDisponible } from "./tipohabitacion.actions";
import { parseISO, isValid } from "date-fns";

interface HabitacionState {
  habitaciones: HabitacionesDisponibleResponse;
  loading: boolean;
  setHabitaciones: (habitaciones: HabitacionesDisponibleResponse) => void;
  clearHabitaciones: () => void;
  loadHabitaciones: (date?: string) => void;
}

const useHabitacionStore = create<HabitacionState>((set) => ({
  loading: false,
  habitaciones: {
    status: false,
    message: "",
    data: {},
  },
  setHabitaciones: (habitaciones: HabitacionesDisponibleResponse) => {
    set({ habitaciones });
  },
  clearHabitaciones: () =>
    set({ habitaciones: { status: false, message: "", data: {} } }),
  loadHabitaciones: async (date?: string) => {
    set({ loading: true });
    const dateFromStorage = localStorage.getItem("dateFrom");
    const isValidDate = dateFromStorage && isValid(parseISO(dateFromStorage));
    const dateFrom = isValidDate
      ? dateFromStorage
      : date || new Date().toISOString().slice(0, 10);
    const dateToStorage = localStorage.getItem("dateTo");
    const isValidDateTo = dateToStorage && isValid(parseISO(dateToStorage));
    const dateTo = isValidDateTo
      ? dateToStorage
      : new Date(new Date(dateFrom).getTime() + 24 * 60 * 60 * 1000)
          .toISOString()
          .slice(0, 10);
    const data = await getHabitacionesDisponible({
      fechaDesde: dateFrom,
      fechaHasta: dateTo,
    });
    set({ habitaciones: data, loading: false });
  },
}));

export default useHabitacionStore;
