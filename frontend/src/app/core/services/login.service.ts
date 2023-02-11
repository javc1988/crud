import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResponse } from '../interfaces/api.interface';
import { LoginData, User } from '../interfaces/auth.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ROUTES_AUTH } from '../data/app.constants';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
  ) { }

  login(data: any): Observable<IResponse> {
    const user: User = {
      email: data.email,
      password: data.password
    };
    const body = JSON.stringify(user);   
    return this.http.post<IResponse>(`${ROUTES_AUTH.LOGIN}`, body, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });
  }
}
