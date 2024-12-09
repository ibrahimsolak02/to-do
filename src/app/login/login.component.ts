import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // Doğru import

@Component({
  selector: 'app-login',
  standalone: true, // Standalone component kullanıyorsunuz
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // `styleUrl` yerine `styleUrls` olmalı
})
export class LoginComponent {
  constructor(private router: Router) {}

  userName: string = '';
  password: string = '';
  errorMessage: string = '';

  login() {
    if (this.userName == 'mtst' && this.password == '123456') {
      this.router.navigate(['/home']); // Doğru bir rotaya yönlendirme
    } else {
      this.errorMessage = 'Kullanıcı adı veya parola yanlış';
    }
  }
}
