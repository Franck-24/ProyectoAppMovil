import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
 

  cita = {
    fecha: '2023-10-30',
    hora: '10:00 AM',
    especialista: 'Dr. Smith',
  };

  examen = {
    tipo: 'Análisis de Sangre',
    resultado: 'Normal',
  };
  mostrarCita: boolean = false; 
  mostrarExamen: boolean = false;
  nombreUsuario: string | null = '';

  constructor(private router: Router) { }

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();

    if (navigation?.extras?.state) {
      this.nombreUsuario = navigation.extras.state['nombre'];
      console.log('Nombre del usuario:', this.nombreUsuario); // revisar porque no me trae la información.
    } else {
      console.log('No se encontró información de navegación.');
      
      this.nombreUsuario = 'Invitado';
    }
  }

  toggleExamen() {
    this.mostrarExamen = !this.mostrarExamen;
  }

  toggleCita() {
    this.mostrarCita = !this.mostrarCita; 
  }


  reservarHora() {
    console.log('Reservar hora');
  }


}
  