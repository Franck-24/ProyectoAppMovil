import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@capacitor/storage';
import { UsuarioService } from 'src/app/services/usuario.service';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  nombreUsuario: string = '';
 

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


  usuario: any = {
    nombre: '',
    correo: '',
    telefono: 0,
    direccion: '',
    imagen: ''
  };

  constructor(private router: Router, private usuarioService: UsuarioService, private sanitizer: DomSanitizer ) { }

  ngOnInit() {
    this.cargarDatosUsuario();

    
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
  async cargarDatosUsuario() {
    const { value } = await Storage.get({ key: 'usuario' });
    if (value) {
      this.usuario = JSON.parse(value); // Parseamos el valor guardado en Storage
      // Luego, intentamos cargar la imagen
      await this.cargarImagenDesdeStorage();
    } else {
      console.log('No se encontraron datos para el usuario.');
    }
  }
  async cargarImagenDesdeStorage() {
    const { value } = await Storage.get({ key: 'usuario-imagen' });
    if (value) {
      this.usuario.imagen = this.sanitizer.bypassSecurityTrustUrl(value); // Recuperamos la imagen y la asignamos al usuario
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
  