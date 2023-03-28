import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup | any;
  passwordHidden: boolean = true;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private login: LoginService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  togglePasswordVisibility() {
    this.passwordHidden = !this.passwordHidden;
  }
  onSubmit() {
    if (this.loginForm.valid) {
      this.userService
        .login(this.loginForm.value.email, this.loginForm.value.password)
        .subscribe((response) => {
          if (response) {
            this.router.navigate(['']);
            localStorage.setItem(
              'tokencartphone',
              JSON.stringify(response.content.token)
            );
            this.login.user.next(response.content.checkUser);
          }
        });
    }
  }
}
