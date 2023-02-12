import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/core/services/login.service';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';

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
    private loginService: LoginService,
    private spinner: NgxSpinnerService
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
      
      this.spinner.show();

      this.loginService.login(dataForm).subscribe({
          next: (v) => {
            this.spinner.hide();
            Swal.fire('Welcome', 'Your login has successfull.','success')
          },
          error: (e) => {
            this.spinner.hide();
            Swal.fire('Error', e.error.error,'error')
          }
      });
      

      //this.router.navigateByUrl('/admin');
    }
    else{
      alert('2')
    }
  }

}
