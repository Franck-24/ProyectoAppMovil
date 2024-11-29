import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EliminarDoctorPage } from './eliminar-doctor.page';

const routes: Routes = [
  {
    path: '',
    component: EliminarDoctorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EliminarDoctorPageRoutingModule {}
