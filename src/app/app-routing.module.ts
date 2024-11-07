import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { noIngresadoGuard } from './guards/no-ingresado.guard';
import { ingresadoGuard } from './guards/ingresado.guard';
import { HorasMedicasComponent } from './componentes/horas-medicas/horas-medicas.component';


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
    path: 'registro',
    loadChildren: () => import('./paginas/registro/registro.module').then( m => m.RegistroPageModule),
    canActivate: [noIngresadoGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./paginas/login/login.module').then( m => m.LoginPageModule),
    canActivate: [noIngresadoGuard]
  },
 
  {
    path: 'recu-pass',
    loadChildren: () => import('./paginas/recu-pass/recu-pass.module').then( m => m.RecuPassPageModule)
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
    path: 'eliminar-doctor/:id',
    loadChildren: () => import('./paginas/doctor/eliminar-doctor/eliminar-doctor.module').then( m => m.EliminarDoctorPageModule)
  },
  {
    path: 'editar-doctor/:id',
    loadChildren: () => import('./paginas/doctor/editar-doctor/editar-doctor.module').then( m => m.EditarDoctorPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./paginas/menu/menu.module').then( m => m.MenuPageModule),
    canActivate: [ingresadoGuard]
  },
  {
    path: 'disponibilidad-horas',
    loadChildren: () => import('./paginas/disponibilidad-horas/disponibilidad-horas.module').then( m => m.DisponibilidadHorasPageModule)
  },
  { path: 'mi-ruta', component: HorasMedicasComponent },
  { path: '', redirectTo: '/mi-ruta', pathMatch: 'full' },  

  





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
