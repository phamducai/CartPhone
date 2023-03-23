import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  user = new BehaviorSubject<any>(null);
  user$ = this.user.asObservable();
  token = new BehaviorSubject<string>('');
  token$ = this.token.asObservable();
  constructor() {}
}
