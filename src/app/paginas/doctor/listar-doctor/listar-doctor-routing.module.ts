import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarDoctorPage } from './listar-doctor.page';

const routes: Routes = [
  {
    path: '',
    component: ListarDoctorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarDoctorPageRoutingModule {}
