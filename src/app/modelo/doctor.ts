
export interface Doctor {
    id: 'number';
    nombre: 'string';
    especialidad: 'string';
    disponibilidad:{ fecha: 'string'; disponible: 'boolean'}[];
  }

  