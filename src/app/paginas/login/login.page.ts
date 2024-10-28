import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController} from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})


export class LoginPage {
  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder,
    private alertController: AlertController, 
    private router:Router){
    
    this.formularioLogin = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'contrasena': new FormControl("",Validators.required),
    });
  }
  ngOnInit(){

  }
  async ingresar() {
    var f = this.formularioLogin.value; 
    console.log('Valores del formulario:', f)
    var usuarioString = localStorage.getItem('usuario'); 

    let usuario: any; 

    if (usuarioString) {
      usuario = JSON.parse(usuarioString);
    } else {

      usuario = null; // Asignar null si no existe
    }
    if (usuario.nombre === f.nombre && usuario.contrasena === f.contrasena) {
      localStorage.setItem('ingresado', 'true')
      console.log('Nombre a pasar:', usuario.nombre);
      //navegar con navigationExtras
      this.router.navigate(['/menu/inicio'], { state:{ nombre: usuario.nombre } });
    } else {
      console.error('Error: Credenciales incorrectas. Intento de ingreso con:', f);
      const alert = await this.alertController.create({
        header: 'Datos incorrectos',
        message: 'Completa todos los datos',
        buttons: ['Aceptar']
      }); 
      await alert.present();
    }
  }

irARegistro(){
  this.router.navigate(['/registro'])
}




}



