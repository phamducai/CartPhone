import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of, throwError } from 'rxjs';
import { User } from 'src/models/user';
import { fakeUser } from './fake-userdata';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  getuser(): Observable<User> {
    return of(fakeUser);
  }
  private apiUrl = 'http://localhost:3002/api/users';
  login(email: string, password: string): Observable<any> {
    const body = { email, password };
    console.log(email, password);
    return this.http
      .post<any>(this.apiUrl + '/login', body)
      .pipe(catchError((error) => of(alert(error.error.message))));
  }
  getdetail(token: string): Observable<any> {
    const body = { token };
    return this.http
      .post<any>(this.apiUrl + '/token', body)
      .pipe(catchError((error) => of(null)));
  }
}
