import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { TokenResponse } from '../interfaces/responses';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  logged$ = new ReplaySubject<boolean>(1);

  constructor(private http: HttpClient) { }

  login(usuario: Usuario): Observable<void> {
    return this.http.post<TokenResponse>('auth/login', usuario).pipe(
      map(resp => {
        localStorage.setItem('token', resp.accessToken);
        this.logged$.next(true);
      })
    );
  }

  registro(usuario: Usuario): Observable<void> {
    return this.http.post<void>('auth/register', usuario);
  }

  logout() {
    localStorage.removeItem('token');
    this.logged$.next(false);
  }
}
