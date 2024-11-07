import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  indiceSeleccionado: number = 0;

  paginas=[
    {
      titulo: 'Inicio',
      url: '/menu/inicio',
      icono: 'home'
    },
    {
      titulo: 'Mis Datos',
      url: '/menu/perfil',
      icono: 'reader'
    },
    {
      titulo: 'citas',
      url: '/menu/citas',
      icono: 'calendar-number'
    },
    {
      titulo: 'Mi salud',
      url: '/menu/mi-salud',
      icono: 'heart'
    },
    {
      titulo: 'Ajustes',
      url: '/menu/ajustes',
      icono: 'settings'
    },
  ]


  constructor(private router: Router, private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  cambiarIndiceSeleccionado(i: number){
    this.indiceSeleccionado = i;
  }

  async salir() {
    const alert = await this.alertCtrl.create({
      header: 'Salir',
      message: '¿Estás seguro que quieres salir?',
      buttons: [
        {
          text: 'No estoy seguro',
          handler: () => {
            // No hace nada si el usuario no está seguro
          }
        },
        {
          text: 'Sí',
          handler: () => {
            // Llamamos a la función async que maneja el cierre de sesión
            this.cerrarSesion();
          }
        }
      ]
    });
  
    await alert.present();
  
    console.log('Usuario cerrando sesión.');
  }
  
  // Esta es una función async separada
  async cerrarSesion() {
    // Usamos await aquí dentro de una función async
    await Storage.remove({ key: 'ingresado' });
  
    // Redirigimos al login
    this.router.navigate(['/login']);
  }
}
