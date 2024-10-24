import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarDoctorPage } from './agregar-doctor.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarDoctorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarDoctorPageRoutingModule {}
