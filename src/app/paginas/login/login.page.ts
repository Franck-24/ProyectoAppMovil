import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username!: string;
  password!: string;
  errorMessage!: string;

  // Usuario y contraseña predefinidos
  private validUsername = 'Franco';
  private validPassword = 'contraseña123';

  constructor(private router: Router) {}

  onSubmit() {
    if (this.username === this.validUsername && this.password === this.validPassword) {
      this.router.navigate(['/home']);
    } else {
      this.errorMessage = 'Usuario o contraseña incorrectos.';
    }
  }
}
