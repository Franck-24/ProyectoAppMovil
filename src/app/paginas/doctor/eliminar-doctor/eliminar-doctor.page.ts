import { Component } from '@angular/core';
import { Router} from '@angular/router';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-eliminar-doctor',
  templateUrl: './eliminar-doctor.page.html',
  styleUrls: ['./eliminar-doctor.page.scss'],
})
export class EliminarDoctorPage{
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

  eliminarDoctor(){
    this.doctorServ.eliminarDoctor(this.doctor).subscribe()
    this.router.navigateByUrl("/listar-doctor")
  }



}

