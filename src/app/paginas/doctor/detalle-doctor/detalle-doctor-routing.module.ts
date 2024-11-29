import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleDoctorPage } from './detalle-doctor.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleDoctorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleDoctorPageRoutingModule {}
