import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  user = new BehaviorSubject<any>(null);

  user$ = this.user.asObservable();
  image = new BehaviorSubject<any>('');
  image$ = this.image.asObservable();
  constructor() {}
}
