export interface TipoHabitacionResponse {
  success: boolean;
  data: TipoHabitacionShowData[];
}

export interface TipoHabitacionShowResponse {
  success: boolean;
  data: TipoHabitacionShowData;
}

export interface TipoHabitacionShowData {
  id: number;
  nombre: string;
  precio: string;
  capacidad: number;
  descripcion: string[];
  imagenes: Imagene[];
  habitaciones: Habitacione[] | { [key: string]: Habitacione };
}

export interface Habitacione {
  id: number;
  numero: string;
  situacion: Situacion;
  piso_id: number;
  tipohabitacion_id: number;
  created_at: Date;
  updated_at: Date;
  sucursal_id: number;
  deleted_at: null;
  descripcion: string;
  precio: string;
}

export enum Situacion {
  Disponible = "Disponible",
}

export interface Imagene {
  id: number;
  tipohabitacion_id: number;
  url: string;
  descripcion: string;
  created_at: Date;
  updated_at: Date;
}
