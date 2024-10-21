
export interface Doctor {
    id: Number;
    nombre: String;
    especialidad: String;
    disponibilidad:{ fecha: String; disponible: Boolean }[];
  }

  