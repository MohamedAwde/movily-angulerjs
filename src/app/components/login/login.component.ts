import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMsg: string = '';

  constructor(private auth: AuthService, private router: Router) {}

  handleLogin(event: SubmitEvent) {
    event.preventDefault();
    if (this.username.trim().length === 0) {
      this.errorMsg = 'username is required';
    } else if (this.password.trim().length === 0) {
      this.errorMsg = 'password is required';
    } else {
      this.errorMsg = '';
      const res = this.auth.login(this.username, this.password);
      if (res === 200) {
        this.router.navigate(['home']);
      } else {
        this.errorMsg = 'invaild credentials';
      }
    }
  }
}
