import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';
  loginForm: FormGroup | any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loginService: LoginService
  ) {
    this.initLoginForm();
  }

  initLoginForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  onLogin() {
    if (this.loginForm.valid) {
      const dataForm = this.loginForm.getRawValue();

      

      this.loginService.login(dataForm)
      .subscribe((resp: any) => {
        
      });

      //this.router.navigateByUrl('/admin');
    }
    else{
      alert('2')
    }
  }

}
