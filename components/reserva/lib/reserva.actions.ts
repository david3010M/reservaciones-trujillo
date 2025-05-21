import { api } from "@/lib/config";
import {
  ReserevaByCodeResponse,
  ReservaRequest,
  ReservaResponse,
} from "./reserva.interface";

export async function createReservation(
  reserva: ReservaRequest
): Promise<ReservaResponse> {
  const { data } = await api.post<ReservaResponse>(
    "/reserva/habitacion",
    reserva
  );
  return data;
}

export async function getReservaByCode(
  code: string
): Promise<ReserevaByCodeResponse | null> {
  try {
    const { data } = await api.get<ReserevaByCodeResponse>(
      `/reserva/habitacion/${code}`
    );
    return data;
  } catch (error) {
    return null;
  }
}
