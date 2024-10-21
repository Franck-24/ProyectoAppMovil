import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/services/doctor.service';
import { Doctores } from 'src/app/interfaces/doctores';




@Component({
  selector: 'app-listar-doctor',
  templateUrl: './listar-doctor.page.html',
  styleUrls: ['./listar-doctor.page.scss'],
})
export class ListarDoctorPage implements OnInit{

  doctores: Doctores[] = [];
  doctor: String='';

  constructor(private doctoresServ: DoctorService) {

   }

   ngOnInit() {
    this.loadDoctores(); // Carga los datos al iniciar el componente
  }


  loadDoctores(): void {
    this.doctoresServ.listarDoctores().subscribe(
      (data) => { this.doctores = data;   
      })
  }


}
