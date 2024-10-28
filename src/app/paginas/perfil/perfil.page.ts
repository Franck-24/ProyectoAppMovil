import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  usuario: any = {
    nombre: '',
    correo: '',
    telefono: '',
    direccion: ''
  };

  constructor() { }

  ngOnInit() {
    this.cargarDatosUsuario();
  }

  cargarDatosUsuario() {
    const usuarioString = localStorage.getItem('usuario');
    if (usuarioString) {
      this.usuario = JSON.parse(usuarioString);
    }
  }

  guardarCambios() {
    localStorage.setItem('usuario', JSON.stringify(this.usuario));
    // Puedes agregar aquí una notificación de éxito o similar
    console.log('Cambios guardados:', this.usuario);
  }
}
