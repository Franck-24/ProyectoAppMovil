import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false; // Variable que indica si el usuario está autenticado

  isAuthenticated(): boolean {
    return this.loggedIn; // Retorna el estado de autenticación
  }

  login() {
    this.loggedIn = true; // Método para iniciar sesión
  }

  logout() {
    this.loggedIn = false; // Método para cerrar sesión
  }
}
