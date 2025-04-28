import { create } from "zustand";

interface ReservaState {
  dateFrom?: Date;
  dateTo?: Date;
  setDateFrom?: (date: Date) => void;
  setDateTo?: (date: Date) => void;
}

const useReservaStore = create<ReservaState>((set) => ({
  dateFrom: undefined,
  dateTo: undefined,
  setDateFrom: (date?: Date) => set({ dateFrom: date }),
  setDateTo: (date?: Date) => set({ dateTo: date }),
}));

export default useReservaStore;
