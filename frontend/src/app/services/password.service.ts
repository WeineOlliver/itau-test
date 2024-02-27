import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PasswordService {
  private apiUrl = 'http://localhost:3000/password-validator';

  constructor(private http: HttpClient) {}

  validatePassword(password: string): Observable<boolean> {
    const body = { password };
    return this.http.post<boolean>(this.apiUrl, body);
  }
}
