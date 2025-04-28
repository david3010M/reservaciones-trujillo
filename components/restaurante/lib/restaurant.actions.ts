export interface Main {
  status: boolean;
  message: string;
  data: { [key: string]: Datum };
}

export interface Datum {
  tipohabitacion: Tipohabitacion;
  habitaciones: Habitacione[];
}

export interface Habitacione {
  id: number;
  numero: string;
  situacion: string;
  piso_id: number;
  tipohabitacion_id: number;
  created_at: Date;
  updated_at: Date;
  sucursal_id: number;
  deleted_at: null;
  descripcion: string;
  precio: string;
  tipohabitacion: Tipohabitacion;
}

export interface Tipohabitacion {
  id: number;
  nombre: string;
  capacidad: number;
  precio: string;
  estado: Estado;
  created_at: Date;
  updated_at: Date;
  sucursal_id: number;
  json_precio_horas: string;
  descripcion: string;
  deleted_at: null;
}

export enum Estado {
  Normal = "Normal",
}
