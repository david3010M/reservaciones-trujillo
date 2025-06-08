import * as LucideReact from "lucide-react";

type IconNames = keyof typeof LucideReact;

export interface AmenitiesResponse {
  success: boolean;
  data: AmenitiesResponseData[];
}

export interface AmenitiesResponseData {
  id: number;
  nombre: string;
  icon: IconNames;
  tipohabitacion_id: number;
}
