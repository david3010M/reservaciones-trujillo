import { api, SUCURSAL } from "@/lib/config";
import {
  TipoHabitacionResponse,
  TipoHabitacionShowResponse,
} from "./tipohabitacion.interface";
import { HabitacionesDisponibleResponse } from "./habitacionesdisponible.interface";
import { HabitacionDisponibleResponse } from "./habitaciondisponible.interface";

export async function getTiposHabitacion(): Promise<TipoHabitacionResponse> {
  const { data } = await api.get<TipoHabitacionResponse>(
    `/tipohabitacion/${SUCURSAL}`
  );
  return data;
}

export async function getTipoHabitacion(
  idTipoHabitacion: string
): Promise<TipoHabitacionShowResponse> {
  const { data } = await api.get<TipoHabitacionShowResponse>(
    `/tipohabitacion/detalle/${idTipoHabitacion}`
  );
  return data;
}

export async function getHabitacionesDisponible({
  fechaDesde,
  fechaHasta,
}: {
  fechaDesde: string;
  fechaHasta?: string;
  idTipoHabitacion?: number;
}): Promise<HabitacionesDisponibleResponse> {
  const { data } = await api.get<HabitacionesDisponibleResponse>(
    `/habitaciones/disponibles/${fechaDesde}/${fechaHasta}/${SUCURSAL}`
  );
  return data;
}

export async function getHabitacionDisponible({
  fechaDesde,
  fechaHasta,
  idTipoHabitacion,
}: {
  fechaDesde: string;
  fechaHasta?: string;
  idTipoHabitacion?: number;
}): Promise<HabitacionDisponibleResponse> {
  const { data } = await api.get<HabitacionDisponibleResponse>(
    `/habitaciones/disponibles/${fechaDesde}/${fechaHasta}/${SUCURSAL}/${idTipoHabitacion}`
  );
  return data;
}

export async function getAmenities(
  idTipoHabitacion: string
): Promise<AmenitiesResponse> {
  const { data } = await api.get<AmenitiesResponse>(
    `/amenities/tipo-habitacion/${idTipoHabitacion}`
  );
  return data;
}
