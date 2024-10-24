import { Component } from '@angular/core';
import { DoctorService } from 'src/app/services/doctor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalle-doctor',
  templateUrl: './detalle-doctor.page.html',
  styleUrls: ['./detalle-doctor.page.scss'],
})
export class DetalleDoctorPage {
  doctor ={
    id: 0,
    nombre: "",
    especialidad: ""
  }

  constructor(private doctorServ: DoctorService, private router: Router) { }
  
  ionViewWillEnter() {
    this.getDoctorByID(this.getIdFromURL())
  }

  getIdFromURL(){
    let url = this.router.url
    let arr = url.split("/", 3)
    let id = parseInt(arr[2])
    return id
  }
  getDoctorByID (doctorID: number){
    this.doctorServ.getDoctorByID(doctorID).subscribe(
      (resp: any)=> {
        console.log('Respuesta recibida del servidor:', resp);
          this.doctor ={
          id: resp[0].id,
          nombre: resp[0].nombre,
          especialidad: resp[0].especialidad
        };
      },
    )
  }
}
