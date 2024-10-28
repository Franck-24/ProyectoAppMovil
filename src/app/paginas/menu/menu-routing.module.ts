import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children:[{
        path: 'inicio',
        loadChildren: () => import('../inicio/inicio.module').then( m => m.InicioPageModule)
    },
    {
      path: 'perfil',
      loadChildren: () => import('../perfil/perfil.module').then( m => m.PerfilPageModule)
    },
    {
      path: 'citas',
      loadChildren: () => import('../citas/citas.module').then( m => m.CitasPageModule)
    },
    {
      path: 'mi-salud',
      loadChildren: () => import('../mi-salud/mi-salud.module').then( m => m.MiSaludPageModule)
    },
    {
      path: 'ajustes',
      loadChildren: () => import('../ajustes/ajustes.module').then( m => m.AjustesPageModule)
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
