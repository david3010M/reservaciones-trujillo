export interface SalonResponse {
    success: boolean;
    data: SalonResponseData[];
}

export interface SalonResponseDataServicios {
    id: number;
    salon_id: number;
    titulo: string;
    descripcion: string;
    icono: string;
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