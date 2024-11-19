import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-agregar-usuario',
  templateUrl: './agregar-usuario.component.html',
  styleUrls: ['./agregar-usuario.component.scss'],
})
export class AgregarUsuarioComponent{

  nvoUsuario: Usuario ={
    nombre:"",
    apellido:"",
    email:"",
    sexo: "",
    contrasena:"",
    telefono: 0,
    direccion: "",
    imagen:"",
  }

  constructor(private usuarioServ: UsuarioService, private router: Router) { }

  crearUsuario(){
    this.usuarioServ.crearUsuario(this.nvoUsuario).subscribe();
    //this.router.navigateByUrl('/listar-doctor')
  }

}
