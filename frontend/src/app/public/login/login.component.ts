import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';

  login() {
    console.log('Iniciando sesión con', this.username, this.password);
    // Aquí deberías hacer una llamada a un servicio que verifique las credenciales y
    // realice la autenticación.
  }

}
