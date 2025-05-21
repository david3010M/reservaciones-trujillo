import {api, SUCURSAL} from "@/lib/config";
import {SalonResponse} from "@/components/salones/lib/salon.interface";

export async function getSalones(): Promise<SalonResponse | null> {
    try {
        const {data} = await api.get<SalonResponse>(`salon/${SUCURSAL}`);
        return data;
    } catch (error) {
        console.error("Error fetching salones:", error);
        return null;
    }
}