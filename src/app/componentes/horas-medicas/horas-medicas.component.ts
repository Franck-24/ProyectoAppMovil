import { Component, OnInit, Input } from '@angular/core';
import { Doctor } from 'src/app/interfaces/doctor';

@Component({
  selector: 'app-horas-medicas',
  templateUrl: './horas-medicas.component.html',
  styleUrls: ['./horas-medicas.component.scss'],
})
export class HorasMedicasComponent  implements OnInit {
  horas = [
    { hora: '8:00', disponible: true },
    { hora: '8:30', disponible: true },
    { hora: '9:00', disponible: true },
    { hora: '9:30', disponible: true },
    { hora: '10:00', disponible: true },
    { hora: '10:30', disponible: true },
    { hora: '11:00', disponible: true },
    { hora: '11:30', disponible: true },
    { hora: '12:00', disponible: true },
    { hora: '12:30', disponible: true },
    { hora: '14:00', disponible: true },
    { hora: '14:30', disponible: true },
    { hora: '15:00', disponible: true },
    { hora: '15:30', disponible: true },
    { hora: '16:00', disponible: true },
    { hora: '16:30', disponible: true },
    { hora: '17:00', disponible: true },
    { hora: '17:30', disponible: true },
  ];



  @Input() doctor!: Doctor;
  horaObj: { disponible: boolean }  
  
    constructor() { 
      this.horaObj = { disponible: true }; 
    }
  
    ngOnInit() {
      console.log(this.doctor);
    }
  
    reservarHora(index: number) {
      if (this.horas[index].disponible) {
        this.horas[index].disponible = false;
        console.log('hora reservada con exito') //hay que especificar función, como para que vaya al sqlite
      }
  
      //me falta declararlo en modul.ts para crear funcionalidad.
    }
  
  }