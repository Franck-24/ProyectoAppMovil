import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/storage'; // Importa Storage de Capacitor
import { Usuarios } from '../interfaces/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  
  constructor() {}

 
  async agregarUsuario(usuario: Usuarios): Promise<void> {
    await Storage.set({
      key: 'usuario', 
      value: JSON.stringify(usuario)
    });
  }

  // Función asincrónica para obtener el usuario del almacenamiento
  async obtenerUsuario(): Promise<Usuarios | null> {
    // Usamos 'await' para obtener el valor desde el almacenamiento
    const { value } = await Storage.get({ key: 'usuario' });
    if (value) {
      // Si encontramos el valor, lo convertimos a objeto y lo retornamos
      return JSON.parse(value);
    }
    // Si no se encuentra el valor, retornamos null
    return null;
  }

  // Función asincrónica para eliminar el usuario del almacenamiento
  async eliminarUsuario(): Promise<void> {
    // Usamos 'await' para esperar que se elimine la clave 'usuario'
    await Storage.remove({ key: 'usuario' });
  }
}

