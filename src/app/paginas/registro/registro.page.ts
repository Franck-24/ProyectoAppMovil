import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuarios } from 'src/app/interfaces/usuarios';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
  registroForm: FormGroup;

  constructor(
    private router: Router,
    private loadingCtrl: LoadingController,
    private fb: FormBuilder,
    private usuarioServ: UsuarioService,
  ) {
    this.registroForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required, Validators.minLength(6)]],
      repiteContrasena: ['', Validators.required],
    }, { validators: this.passwordsMatch});
  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      duration: 500,
    });
    await loading.present();
  }

  onSubmit() {
    if (this.registroForm.invalid) {
      alert("Por favor, completa todos los campos correctamente.");
      return;
    }
    const { nombre, apellido, email, contrasena } = this.registroForm.value;
    if (!this.validateEmail(email)) {
      alert("Por favor, ingresa un correo electrónico válido.");
      return;
    }
    const nvoUsuario: Usuarios ={
      nombre,
      apellido,
      email,
      contrasena
    };
    this.usuarioServ.agregarUsuario(nvoUsuario);
    localStorage.setItem('usuario', JSON.stringify(nvoUsuario));
    

    console.log('Formulario enviado correctamente:', nombre, apellido, email, contrasena);
    // Redirige al usuario después de un exitoso registro
    this.showLoading();
    this.router.navigate(['/menu/login']);

    
  }

  validateEmail(email: string): boolean {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  passwordsMatch(form: FormGroup) {
    const passwordControl = form.get('contrasena');
    const confirmPasswordControl = form.get('repiteContrasena');
  
    if (passwordControl && confirmPasswordControl) {
      const password = passwordControl.value;
      const confirmPassword = confirmPasswordControl.value;
  
      return password === confirmPassword ? null : { passwordsMismatch: true };
    }
  
    return null; // Si no se pueden obtener los controles, no hay error
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

}