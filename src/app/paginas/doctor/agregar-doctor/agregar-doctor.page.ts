import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/interfaces/doctor';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-agregar-doctor',
  templateUrl: './agregar-doctor.page.html',
  styleUrls: ['./agregar-doctor.page.scss'],
})
export class AgregarDoctorPage implements OnInit {
  nuevoDoctor: Doctor ={
    nombre:"",
    especialidad:""
  }

  constructor(private doctorServ: DoctorService, private router: Router) { }

 

  ngOnInit() {
  }

  crearDoctor(){
    this.doctorServ.crearDoctor(this.nuevoDoctor).subscribe();
    this.router.navigateByUrl('/listar-doctor')
  }

}
