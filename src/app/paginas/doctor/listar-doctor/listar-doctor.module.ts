import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarDoctorPageRoutingModule } from './listar-doctor-routing.module';

import { ListarDoctorPage } from './listar-doctor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarDoctorPageRoutingModule
  ],
  declarations: [ListarDoctorPage]
})
export class ListarDoctorPageModule {}
