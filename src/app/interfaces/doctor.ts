export interface Disponibilidad{
    fecha: string;
    disponible?: boolean;
}

export interface Doctor {
    nombre: string;
    especialidad: string;
    disponibilidad: Disponibilidad[];
}