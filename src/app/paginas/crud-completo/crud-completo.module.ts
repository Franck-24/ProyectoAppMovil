import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrudCompletoPageRoutingModule } from './crud-completo-routing.module';

import { CrudCompletoPage } from './crud-completo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrudCompletoPageRoutingModule
  ],
  declarations: [CrudCompletoPage]
})
export class CrudCompletoPageModule {}
