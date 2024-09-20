// src/app/user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000'; // Simulated API endpoint

  constructor(private http: HttpClient) {}

  loginUser(user: string, pass: string): Observable<any> {
    // Source: User inputs directly used in the query
    const query = `SELECT * FROM users WHERE user = '${user}' AND pass = '${pass}'`; // Vulnerable SQL Injection
    return this.http.get(`${this.apiUrl}/query?sql=${encodeURIComponent(query)}`); // Sink: Sending vulnerable query
  }
}
