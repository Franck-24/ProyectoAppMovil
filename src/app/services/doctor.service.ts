import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctores } from '../interfaces/doctores';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Doctor } from '../interfaces/doctor';


@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  
  constructor(private http: HttpClient) { }

  
  listarDoctores():Observable<Doctores[]>{
    return this.http.get<Doctores[]>(`${environment.apiURL}/doctores`)
  }

  crearDoctor(nuevoDoctor: Doctor):Observable<Doctor>{
    return this.http.post<Doctor>(`${environment.apiURL}/doctores`, nuevoDoctor)
  }

  getDoctorByID(id: Number):Observable<Doctores[]>{
    return this.http.get<Doctores[]>(`${environment.apiURL}/doctores/?id=${id}`) //trae a los doctores por id
  }

  editarDoctor(doctor: any):Observable<Doctores[]>{
    return this.http.put<Doctores[]>(`${environment.apiURL}/doctores/${doctor.id}`, doctor)
  }

  eliminarDoctor(doctor:any):Observable<Doctores[]>{
    return this.http.delete<Doctores[]>(`${environment.apiURL}/doctores/${doctor.id}`)
  }


}

