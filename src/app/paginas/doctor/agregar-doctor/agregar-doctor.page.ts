import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/interfaces/doctor';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-agregar-doctor',
  templateUrl: './agregar-doctor.page.html',
  styleUrls: ['./agregar-doctor.page.scss'],
})
export class AgregarDoctorPage{
  

  nuevoDoctor: Doctor ={
    nombre:"",
    especialidad:"",
    disponibilidad: [
      { fecha: " ", disponible: undefined }
    ]
  }

  constructor(private doctorServ: DoctorService, private router: Router) { }



  crearDoctor(){
    this.doctorServ.crearDoctor(this.nuevoDoctor).subscribe();
    this.router.navigateByUrl('/listar-doctor')
  }

}
