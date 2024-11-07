import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController} from '@ionic/angular';
import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})


export class LoginPage {
  formularioLogin: FormGroup;

  constructor(
    public fb: FormBuilder,
    private alertController: AlertController, 
    private router:Router
  ){
    this.formularioLogin = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'contrasena': new FormControl("",Validators.required),
    });
  }

  async ingresar() {
    const f = this.formularioLogin.value;
    console.log('Valores del formulario:', f);

    const {value} = await Storage.get({ key: 'usuario' }); // Usamos @capacitor/storage
    let usuario: any = null;

    if (value) {
      usuario = JSON.parse(value); // Parseamos los datos
      console.log('Usuario recuperado de Storage:', usuario);
    }

    if (usuario && usuario.nombre === f.nombre && usuario.contrasena === f.contrasena) {
      await Storage.set({ 
        key: 'ingresado', 
        value: 'true' 
      }); // Guardamos el estado de ingresado

      console.log('Inicio de sesión exitoso:', usuario.nombre);
      this.router.navigate(['/menu/inicio'], { state: { nombre: usuario.nombre } });
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

  irARegistro() {
    this.router.navigate(['/registro']);
  }
}