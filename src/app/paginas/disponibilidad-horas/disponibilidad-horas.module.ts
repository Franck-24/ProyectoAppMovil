import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { HorasMedicasComponent } from 'src/app/componentes/horas-medicas/horas-medicas.component';

import { DisponibilidadHorasPageRoutingModule } from './disponibilidad-horas-routing.module';

import { DisponibilidadHorasPage } from './disponibilidad-horas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DisponibilidadHorasPageRoutingModule
  ],
  declarations: [DisponibilidadHorasPage, HorasMedicasComponent]
})
export class DisponibilidadHorasPageModule {}
