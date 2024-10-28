import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.page.html',
  styleUrls: ['./ajustes.page.scss'],
})
export class AjustesPage implements OnInit {
    adminOptions = [
      {
        titulo: 'Gestionar Doctores',
        url: '/listar-doctor',
        icono: 'people'
      },
     // {
     //   titulo: 'Ver Reportes',
       // url: '/admin/reportes',
     //   icono: 'clipboard'
   //   },
      {
        titulo: 'Gestionar Citas',
        url: '/admin/citas',
        icono: 'calendar'
      },
  //    {
//        titulo: 'Configuraciones',
        //url: '/admin/configuraciones',
      //  icono: 'settings'
    //  }
    ];

  constructor() { }

  ngOnInit() {
  }

}
