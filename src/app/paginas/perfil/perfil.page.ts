import { Component, OnInit } from '@angular/core';
import { Storage } from '@capacitor/storage';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ImagenService } from 'src/app/services/imagen.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

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

  constructor(private usuarioServ: UsuarioService,
     private imagenServ: ImagenService,
     private http: HttpClient ) { }

 async ngOnInit() {
    this.cargarDatosUsuario();
    await this.obtenerImagen(); 
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
        // Llamar al servicio para subir la imagen
        this.imagenServ.subirImagen(file).subscribe(
          async (response) => {
            // Suponiendo que la respuesta contiene la URL de la imagen subida
            const imageUrl = response.imageUrl;
            
            try {
              // Guardar la URL de la imagen en Capacitor Storage
              await Storage.set({
                key: 'usuario-imagen',
                value: imageUrl // Solo almacenas la URL
              });
              this.usuario.imagen = imageUrl;

              console.log('Imagen subida y URL guardada correctamente:', imageUrl);
              await this.guardarImagenEnJSONServer(imageUrl);
            } catch (error) {
              console.error('Error al guardar la URL en Storage:', error);
            }
          },
          (error) => {
            console.error('Error al subir la imagen:', error);
          }
        );
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

  async obtenerImagen() {
    try {
      const { value } = await Storage.get({ key: 'usuario-imagen' });
      if (value) {
        this.usuario.imagen = value; // Asignamos la URL de la imagen a la propiedad `usuario.imagen`
      }
      console.log('URL de la imagen guardada:', value);
    } catch (error) {
      console.error('Error al obtener la URL de la imagen:', error);
    }
  }

  async guardarImagenEnJSONServer(imageUrl: string) {
    // Asumiendo que tienes una API REST en JSON Server que maneja el endpoint '/usuarios'
    const usuarioData = {
      ...this.usuario,  // Usamos los datos actuales del usuario
      imagen: imageUrl   // Añadimos la URL de la imagen
    };

    try {
      const response = await this.http.put(`${environment.apiURL}/usuarios/${this.usuario.id}`,usuarioData).toPromise;
      console.log('Usuario actualizado en JSON Server:', response);
    } catch (error) {
      console.error('Error al guardar datos en JSON Server:', error);
    }
  }

}
