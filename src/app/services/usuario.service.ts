import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@capacitor/storage'; // Importa Storage de Capacitor
import { Usuarios } from '../interfaces/usuarios';
import { Usuario } from '../interfaces/usuario';




@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  
  constructor(private http: HttpClient) {}

  crearUsuario(nvoUsuario: Usuario):Observable<Usuario>{
    return this.http.post<Usuario>(`${environment.apiURL}/usuarios`,nvoUsuario)
  }

  editarUsuario(usuario: any):Observable<Usuarios[]>{
    return this.http.put<Usuarios[]>(`${environment.apiURL}/usuarios/${usuario.id}`,usuario)
  }

  getUsuarioByID(id:number):Observable<Usuarios[]>{
    return this.http.get<Usuarios[]>(`${environment.apiURL}/usuarios/?id=${id}`) //trae a los doctores por id
  }

    // Función asincrónica para obtener el usuario del almacenamiento
 async obtenerUsuario(): Promise<Usuario | null> {
  const { value } = await Storage.get({ key: 'usuario' });
      if (value) {
     return JSON.parse(value);
   }
  return null;
  }




  // Función asincrónica para eliminar el usuario del almacenamiento
  //async eliminarUsuario(): Promise<void> {
    // Usamos 'await' para esperar que se elimine la clave 'usuario'
  //  await Storage.remove({ key: 'usuario' });
  //}
}

