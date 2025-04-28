import { parse } from "date-fns";
import { create } from "zustand";

interface ReservaState {
  dateFrom?: Date;
  dateTo?: Date;
  setDateFrom: (date?: Date) => void;
  setDateTo: (date?: Date) => void;
}

const getOrSetDate = (key: string, fallbackDate: () => Date): Date => {
  let storedDate = localStorage.getItem(key);
  if (!storedDate) {
    const date = fallbackDate();
    localStorage.setItem(key, date.toISOString().slice(0, 10));
    storedDate = date.toISOString();
  }
  return parse(storedDate, "yyyy-MM-dd", new Date());
};

const useReservaStore = create<ReservaState>((set, get) => ({
  dateFrom: getOrSetDate("dateFrom", () => new Date()),
  dateTo: getOrSetDate("dateTo", () => {
    const dateFrom = get().dateFrom || new Date();
    const nextDay = new Date(dateFrom);
    nextDay.setDate(dateFrom.getDate() + 1);
    return nextDay;
  }),
  setDateFrom: (date?: Date) => set({ dateFrom: date }),
  setDateTo: (date?: Date) => set({ dateTo: date }),
}));

export default useReservaStore;
