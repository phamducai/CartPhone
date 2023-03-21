import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { User } from 'src/models/user';
import { fakeUser } from './fake-userdata';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}
  getuser(): Observable<User> {
    return of(fakeUser);
  }
}
