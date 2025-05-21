import * as LucideReact from "lucide-react";

type IconNames = keyof typeof LucideReact;

export interface SalonResponse {
    success: boolean;
    data: SalonResponseData[];
}

export interface SalonResponseDataServicios {
    id: number;
    salon_id: number;
    titulo: string;
    descripcion: string;
    icono: IconNames;
    created_at: string;
    updated_at: string;
    deleted_at?: any;
}

export interface SalonResponseDataPaquetes {
    id: number;
    salon_id: number;
    nombre: string;
    precio: string;
    content: string;
    imagen: string;
    created_at: string;
    updated_at: string;
    deleted_at?: any;
}

export interface SalonResponseData {
    id: number;
    titulo: string;
    descripcion_corta: string;
    descripcion_larga: string;
    imagen: string;
    situacion: string;
    sucursal_id: number;
    created_at: string;
    updated_at: string;
    deleted_at?: any;
    servicios: SalonResponseDataServicios[];
    paquetes: SalonResponseDataPaquetes[];
}

export interface ReservaSalonRequest {
    sucursal_id: number;
    salon_package_id: number;
    fechareserva: string;
    total: number;
    nropersonas: number;
    comentario: string;
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

export interface ReservaSalonResponse {
    success: boolean;
    message: string;
    codigo_reserva: number;
    email_sent_to: string;
}

export interface ReservaSalonCodeResponse {
    success: boolean;
    reserva_paquete: ReservaSalonCodeResponseReserva_paquete;
}

export interface ReservaSalonCodeResponseReserva_paquetePaquete {
    id: number;
    nombre: string;
    precio: string;
    content: string;
    imagen: string;
}

export interface ReservaSalonCodeResponseReserva_paquete {
    id: number;
    fechareserva: string;
    estado: string;
    precio_paquete: string;
    total: string;
    celular?: any;
    email: string;
    comentario: string;
    nropersonas: number;
    sucursal_id: number;
    sucursal: string;
    paquete: ReservaSalonCodeResponseReserva_paquetePaquete;
}



