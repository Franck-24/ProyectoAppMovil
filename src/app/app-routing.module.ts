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
    redirectTo: ' ',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./paginas/login/login.module').then( m => m.LoginPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'recu-pass',
    loadChildren: () => import('./paginas/recu-pass/recu-pass.module').then( m => m.RecuPassPageModule)
  },
  {
    path: 'crear-cuenta',
    loadChildren: () => import('./paginas/crear-cuenta/crear-cuenta.module').then( m => m.CrearCuentaPageModule)
  },
  {
    path: 'listar-doctor',
    loadChildren: () => import('./paginas/doctor/listar-doctor/listar-doctor.module').then( m => m.ListarDoctorPageModule)
  },
  {
    path: 'agregar-doctor',
    loadChildren: () => import('./paginas/doctor/agregar-doctor/agregar-doctor.module').then( m => m.AgregarDoctorPageModule)
  },

  {
    path: 'detalle-doctor/:id',
    loadChildren: () => import('./paginas/doctor/detalle-doctor/detalle-doctor.module').then( m => m.DetalleDoctorPageModule)
  },
  {
    path: 'eliminar-doctor',
    loadChildren: () => import('./paginas/doctor/eliminar-doctor/eliminar-doctor.module').then( m => m.EliminarDoctorPageModule)
  },
  {
    path: 'editar-doctor',
    loadChildren: () => import('./paginas/doctor/editar-doctor/editar-doctor.module').then( m => m.EditarDoctorPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
