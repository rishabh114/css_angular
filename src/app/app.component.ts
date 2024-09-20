// src/app/app.component.ts
import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: string = '';
  pass: string = '';
  response: any;

  constructor(private userService: UserService) {}

  login() {
    this.userService.loginUser(this.user, this.pass).subscribe(
      (data) => {
        this.response = data; // Handle successful response
      },
      (error) => {
        console.error('Login error:', error); // Handle error
      }
    );
  }
}
