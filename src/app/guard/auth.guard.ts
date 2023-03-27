import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { LoginService } from '../login.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private appComponent: AppComponent) {}

  canActivate(): boolean {
    const isAuthenticated = localStorage.getItem('tokencartphone');

    if (isAuthenticated) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
