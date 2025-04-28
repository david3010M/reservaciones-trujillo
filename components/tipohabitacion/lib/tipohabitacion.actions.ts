import { api, SUCURSAL } from "@/lib/config";
import { TipoHabitacionResponse } from "./tipohabitacion.interface";

export async function getTiposHabitacion(): Promise<TipoHabitacionResponse> {
  const { data } = await api.get<TipoHabitacionResponse>(
    `/tipohabitacion/${SUCURSAL}`
  );
  return data;
}
