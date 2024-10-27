import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';
import { environment } from 'src/environments/environment';
import { Usuarios } from '../interfaces/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService { 
  
  constructor() {}

  agregarUsuario(usuario: Usuarios):void {
    localStorage.setItem('usuario', JSON.stringify(usuario));
  }
 
  
}
