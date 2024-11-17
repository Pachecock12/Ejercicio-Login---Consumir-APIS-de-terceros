import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  allowedEmails: string[] = ['correo1@example.com', 'correo2@example.com']; // Lista de correos permitidos
  apiUrl: string = 'URL_DE_TU_API'; // Reemplaza con el URL de tu API

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;

    // Verificar si el correo está en la lista permitida
    if (!this.allowedEmails.includes(email)) {
      alert('El correo no está autorizado para iniciar sesión.');
      return;
    }

    // Realizar la validación con la API
    this.http.post(`${this.apiUrl}/auth/login`, { email, password }).subscribe({
      next: (response) => {
        console.log('Inicio de sesión exitoso:', response);
        this.router.navigate(['/home']);
      },
      error: (err) => {
        console.error('Error al iniciar sesión:', err);
        alert('Usuario o contraseña incorrectos.');
      }
    });
  }
}
