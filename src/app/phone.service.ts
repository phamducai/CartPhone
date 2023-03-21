import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { Phone } from 'src/models/phone';

import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { debounceTime } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class PhoneService {
  constructor(private http: HttpClient) {}

  private apiUrl = 'http://localhost:3002/api/phones';

  getPhones(): Observable<Phone[]> {
    return this.http.get<Phone[]>(this.apiUrl).pipe(
      tap((receivedMovies: any) => {
        return receivedMovies.content;
      }),
      catchError((error) => of([]))
    );
  }
  getPhonebyId(id: string | null): Observable<Phone | any> {
    return this.http.get<Phone>(this.apiUrl + `/${id}`).pipe(
      tap((receivedMovie: any) => {
        return receivedMovie.content;
      }),
      catchError((error) => of([null, error]))
    );
  }

  SearchPhonebyName(name: string): Observable<any> {
    if (!name.trim()) {
      return of([]);
    }

    return this.http
      .get<Phone[]>(this.apiUrl + `/find/${name}`)
      .pipe(debounceTime(300));
  }
}
