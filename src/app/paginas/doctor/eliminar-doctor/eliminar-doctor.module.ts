import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EliminarDoctorPageRoutingModule } from './eliminar-doctor-routing.module';

import { EliminarDoctorPage } from './eliminar-doctor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EliminarDoctorPageRoutingModule
  ],
  declarations: [EliminarDoctorPage]
})
export class EliminarDoctorPageModule {}
