import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarDoctorPageRoutingModule } from './agregar-doctor-routing.module';

import { AgregarDoctorPage } from './agregar-doctor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarDoctorPageRoutingModule
  ],
  declarations: [AgregarDoctorPage]
})
export class AgregarDoctorPageModule {}
