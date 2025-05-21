import {api, SUCURSAL} from "@/lib/config";
import {
    ReservaSalonCodeResponse,
    ReservaSalonRequest,
    ReservaSalonResponse,
    SalonResponse
} from "@/components/salones/lib/salon.interface";
import {ReservaByCodeResponse, ReservaRequest, ReservaResponse} from "@/components/reserva/lib/reserva.interface";

export async function getSalones(): Promise<SalonResponse | null> {
    try {
        const {data} = await api.get<SalonResponse>(`salon/${SUCURSAL}`);
        return data;
    } catch (error) {
        console.error("Error fetching salones:", error);
        return null;
    }
}

export async function getSalon(id: string): Promise<SalonResponse | null> {
    try {
        const {data} = await api.get<SalonResponse>(`salon/${SUCURSAL}/${id}`);
        return data;
    } catch (error) {
        console.error("Error fetching salon:", error);
        return null;
    }
}

export async function createReservationSalon(
    reserva: ReservaSalonRequest
): Promise<ReservaSalonResponse> {
    const {data} = await api.post<ReservaSalonResponse>(
        "/reserva/paquete",
        reserva
    );
    return data;
}

export async function getReservaSalonByCode(
    code: string
): Promise<ReservaSalonCodeResponse | null> {
    try {
        const {data} = await api.get<ReservaSalonCodeResponse>(
            `/reserva/paquete/${code}`
        );
        return data;
    } catch (error) {
        return null;
    }
}
