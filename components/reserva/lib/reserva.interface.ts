export interface ReservaRequest {
  sucursal_id: number;
  fechavencimiento: string;
  noches: number;
  total: number;
  adelanto: number;
  preciohabitacion: number;
  medio_pago_adelanto_id: number | null;
  nropersonas: number;
  comentario: string;
  habitacion_id?: number;
  persona: Persona;
}

interface Persona {
  nombres: string;
  apellidos: string;
  nrodoc: string;
  telefono: string;
  email: string;
  direccion: string;
}

export interface ReservaResponse {
  success: boolean;
  message: string;
  codigo_reserva: number;
  email_sent_to: string;
}

export interface ReserevaByCodeResponse {
  success: boolean;
  reserva: Reserva;
}

interface Reserva {
  id: number;
  fechareserva: string;
  dias: number;
  estado: string;
  modo: string;
  habitacion: Habitacion[];
  total: string;
  adelanto: string;
  celular: null;
  email: string;
  comentario: string;
  nropersonas: number;
  sucursal: string;
  motivo: null;
  origen: null;
  mediopago: null;
}

interface Habitacion {
  habitacion_id: number;
  numero: string;
  situacion: string;
  descripcion: string;
  piso: string;
  tipohabitacion: Tipohabitacion;
  precio: string;
}

interface Tipohabitacion {
  nombre: string;
  capacidad: number;
  precio: string;
}
