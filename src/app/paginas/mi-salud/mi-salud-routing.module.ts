import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MiSaludPage } from './mi-salud.page';

const routes: Routes = [
  {
    path: '',
    component: MiSaludPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiSaludPageRoutingModule {}
