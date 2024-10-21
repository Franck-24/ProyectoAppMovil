import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.page.html',
  styleUrls: ['./crear-usuario.page.scss'],
})
export class CrearUsuarioPage implements OnInit {
  formularioRegistro: FormGroup;

  constructor(
    private fb: FormBuilder,
    public alertController: AlertController,
    private usuarioService: UsuarioService
  ) {
    this.formularioRegistro = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'apellido': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required),
      'confirmpassword': new FormControl("", Validators.required),
      'number': new FormControl("", [Validators.required]),
      'email': new FormControl("", [Validators.required, Validators.email]),
    }, { validators: this.passwordsMatch });
  }

  ngOnInit() {}

  passwordsMatch(form: FormGroup) {
    return form.get('password')?.value === form.get('confirmpassword')?.value ? null : { mismatch: true };
  }

  async guardar() {
    console.log('Guardar');

    if (this.formularioRegistro.invalid) {
      const alert = await this.alertController.create({
        header: 'Datos incompletos',
        message: 'Por favor completa todos los campos correctamente.',
        buttons: ['Aceptar']
      });
      await alert.present();
      return;
    }

    if (this.formularioRegistro.errors && this.formularioRegistro.errors['mismatch']) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Las contraseñas no coinciden.',
        buttons: ['Aceptar']
      });
      await alert.present();
      return;
    }

    const f = this.formularioRegistro.value;
    const usuario = {
      nombre: f.nombre,
      apellido: f.apellido,
      password: f.password,
      number: f.number,
      email: f.email
    };

    this.usuarioService.agregarUsuario(usuario).subscribe(
      async (usuarioGuardado: any) => {
        const alert = await this.alertController.create({
          header: 'Éxito',
          message: 'Usuario guardado correctamente.',
          buttons: ['Aceptar']
        });
        await alert.present();
        this.formularioRegistro.reset();
      },
      async (error) => {
        const alert = await this.alertController.create({
          header: 'Error',
          message: 'Hubo un problema al guardar el usuario.',
          buttons: ['Aceptar']
        });
        await alert.present();
      }
    );
  }
}
