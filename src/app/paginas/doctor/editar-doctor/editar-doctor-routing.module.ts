import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarDoctorPage } from './editar-doctor.page';

const routes: Routes = [
  {
    path: '',
    component: EditarDoctorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarDoctorPageRoutingModule {}
