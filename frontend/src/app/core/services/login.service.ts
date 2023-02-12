import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { IResponse } from '../interfaces/api.interface';
import { User } from '../interfaces/auth.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ROUTES_AUTH } from '../data/app.constants';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
    private spinner: NgxSpinnerService
  ) { }

  login(data: any): Observable<any> {
    const user: User = {
      email: data.email,
      password: data.password
    };
    const body = JSON.stringify(user);   
    return this.http.post<any>(`${ROUTES_AUTH.LOGIN}`, body, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
