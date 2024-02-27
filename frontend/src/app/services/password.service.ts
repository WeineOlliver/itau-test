import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ValidatePasswordModel } from './password-model';

@Injectable({
  providedIn: 'root',
})
export class PasswordService {
  private apiUrl = 'http://localhost:3000/password-validator';

  constructor(private http: HttpClient) {}

  validatePassword(password: string): Observable<ValidatePasswordModel> {
    const body = { password };
    return this.http.post<ValidatePasswordModel>(this.apiUrl, body);
  }
}
