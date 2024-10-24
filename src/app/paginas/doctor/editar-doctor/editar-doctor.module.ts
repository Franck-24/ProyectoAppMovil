import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarDoctorPageRoutingModule } from './editar-doctor-routing.module';

import { EditarDoctorPage } from './editar-doctor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarDoctorPageRoutingModule
  ],
  declarations: [EditarDoctorPage]
})
export class EditarDoctorPageModule {}
