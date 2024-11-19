import { Component, OnInit } from '@angular/core';
import { Storage } from '@capacitor/storage';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  usuario: any = {
    nombre: '',
    correo: '',
    telefono: 0,
    direccion: '',
    imagen: ''
  };

  constructor(private usuarioServ: UsuarioService) { }

  ngOnInit() {
    this.cargarDatosUsuario();
  }

   async cargarDatosUsuario() {
    const { value } = await Storage.get({ key: 'usuario' });
    if (value) {
      this.usuario = JSON.parse(value); // Parseamos el valor guardado en Storage
    } else {
      console.log('No se encontraron datos para el usuario.');
    }
  }

  

    // Capturar la imagen seleccionada
    onFileSelected(event: any) {
      const file = event.target.files[0]; // Obtener el primer archivo seleccionado
  
      if (file) {
        const reader = new FileReader();
        
        reader.onload = (e: any) => {
          // Almacenar la imagen en la propiedad usuario.imagen
          this.usuario.imagen = e.target.result; 
          Storage.set({
            key: 'usuario-imagen',
            value: JSON.stringify(this.usuario.imagen)
          }).then(() => {
            console.log("Imagen guardada correctamente en Storage");
          }); 
        };
        
        reader.readAsDataURL(file);  // Lee el archivo y lo convierte a base64
      }
    }

  async editarUsuario() {
    await Storage.set({
      key: 'usuario',
      value: JSON.stringify(this.usuario) // Convertimos el objeto 'usuario' a string
    });
    // Puedes agregar aquí una notificación de éxito o similar
    console.log('Cambios guardados:', this.usuario);
  }
}
