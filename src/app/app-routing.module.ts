import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
//import { AuthGuard } from './app/guards/auth.guard'; // Importa mi guard
//import { DashboardComponent } from './das hboard/dashboard.component'; // Cambia según tu estructura
//import { LoginComponent } from './login/login.component'; // Cambia según tu estructura
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./paginas/login/login.module').then( m => m.LoginPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'crear-usuario',
    loadChildren: () => import('./paginas/crear-usuario/crear-usuario.module').then( m => m.CrearUsuarioPageModule)
  },
  {
    path: 'recu-pass',
    loadChildren: () => import('./paginas/recu-pass/recu-pass.module').then( m => m.RecuPassPageModule)
  },
  {
    path: 'crud-completo',
    loadChildren: () => import('./paginas/crud-completo/crud-completo.module').then( m => m.CrudCompletoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
