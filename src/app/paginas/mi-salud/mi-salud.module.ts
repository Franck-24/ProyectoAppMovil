import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MiSaludPageRoutingModule } from './mi-salud-routing.module';

import { MiSaludPage } from './mi-salud.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MiSaludPageRoutingModule
  ],
  declarations: [MiSaludPage]
})
export class MiSaludPageModule {}
