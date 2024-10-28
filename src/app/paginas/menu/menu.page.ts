import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

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
      header: 'salir',
      message: '¿Estás seguro que quieres salir?',
      buttons:[
        {
        text: 'No estoy seguro',
        handler:()  =>{
        }
        },{
          text: 'Si',
          handler:() => {
            localStorage.removeItem('ingresado');
            this.router.navigate(['/login']);
          }
        }
      ]
    });
    await alert.present();
    // Implementa tu lógica de cierre de sesión o salida aquí
    console.log('Usuario cerrando sesión.');
    // Ejemplo: this.router.navigate(['/login']);
  }

}
