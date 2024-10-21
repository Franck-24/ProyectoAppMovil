import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})


export class LoginPage {
  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder,private alertController: AlertController){
    this.formularioLogin = this.fb.group({
      'username': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required),
    })

  
  }
  ngOnInit(){

  }
async ingresar() {
    var f = this.formularioLogin.value; // Obtener los valores del formulario
    var usuarioString = localStorage.getItem('usuario'); // Obtener el valor del localStorage

    // Manejar el caso donde usuarioString puede ser null
    let username: any; // Declarar la variable para el usuario

    if (usuarioString) {
        username = JSON.parse(usuarioString); // Parsear solo si no es null
    } else {
        username = null; // Asignar null si no existe
    }

    // Comprobar si el usuario existe y si las credenciales son correctas
    if (username && username.username === f.nombre && username.password === f.password) {
        console.log('Ingresado'); // Credenciales correctas

    } else {
        // Si las credenciales son incorrectas o el usuario no existe
        const alert = await this.alertController.create({
            header: 'Datos incorrectos',
            message: 'Completa todos los datos',
            buttons: ['Aceptar']
        });
        
        await alert.present(); // Mostrar la alerta
    }
}


}



