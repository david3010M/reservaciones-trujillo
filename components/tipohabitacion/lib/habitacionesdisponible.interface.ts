export interface HabitacionesDisponibleResponse {
  status: boolean;
  message: string;
  data: { [key: string]: HabitacionesDisponibleResponseData };
}

export interface HabitacionesDisponibleResponseData {
  tipohabitacion: Tipohabitacion;
  habitaciones: Habitacione[];
}

export interface Habitacione {
  id: number;
  numero: string;
  situacion: string;
  piso: string;
}

export interface Tipohabitacion {
  id: number;
  nombre: string;
  precio: string;
  capacidad: number;
  descripcion: string[];
  imagenes: Imagene[];
}

export interface Imagene {
  id: number;
  tipohabitacion_id: number;
  url: string;
  descripcion: string;
  created_at: Date;
  updated_at: Date;
}
