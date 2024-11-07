import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  nombreUsuario: string = 'Invitado';
 

  cita = {
    fecha: '30-10-2024',
    hora: '10:00 AM',
    especialista: 'Dr. Smith',
  };

  examen = {
    tipo: 'Análisis de Sangre',
    resultado: 'Normal',
  };
  mostrarCita: boolean = false; 
  mostrarExamen: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
    // Aquí accedemos a los datos pasados a través de state
    const navigation = this.router.getCurrentNavigation();
    
    if (navigation?.extras?.state) {
      // Accedemos al nombre que pasamos desde el Login
      this.nombreUsuario = navigation.extras.state['nombre'];
      console.log('Nombre del usuario:', this.nombreUsuario); // Verifica si se muestra correctamente
    } else {
      console.log('No se encontró información de navegación.');
    }
  }
    
  toggleExamen() {
    this.mostrarExamen = !this.mostrarExamen;
  }

  toggleCita() {
    this.mostrarCita = !this.mostrarCita; 
  }


  reservarHora() {
    this.router.navigate(['/disponibilidad-horas']);
    console.log('Reservar hora');
  }


}
  