import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleDoctorPageRoutingModule } from './detalle-doctor-routing.module';

import { DetalleDoctorPage } from './detalle-doctor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleDoctorPageRoutingModule
  ],
  declarations: [DetalleDoctorPage]
})
export class DetalleDoctorPageModule {}
