import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrudCompletoPage } from './crud-completo.page';

const routes: Routes = [
  {
    path: '',
    component: CrudCompletoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrudCompletoPageRoutingModule {}
