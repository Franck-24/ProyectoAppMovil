export interface Disponibilidad{
    fecha: string;
    disponible?: boolean;
}

export interface Doctores {
    id: number;
    nombre: string;
    especialidad: string;
    disponibilidad: Disponibilidad[];
          
}
