import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';  // Si estás usando variables de entorno

@Injectable({
  providedIn: 'root'
})
export class ImagenService {

  // Define el endpoint de la API para la carga de imágenes
  private apiURL = `${environment.apiURL}/upload`; // Aquí debes poner la URL de tu servidor

  constructor(private http: HttpClient) { }

  // Método para subir la imagen
  subirImagen(file: File): Observable<any> {
    // Crea un FormData para enviar el archivo como un multipart/form-data
    const formData = new FormData();
    formData.append('image', file, file.name);  // 'image' es el nombre del campo en el servidor

    // Realiza una solicitud POST a la API
    return this.http.post<any>(this.apiURL, formData, {
      headers: new HttpHeaders({
        'Content-Type': 'multipart/form-data' // Algunos servidores requieren este header
      })
    });
  }
}