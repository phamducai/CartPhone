import { Injectable } from '@angular/core';
import { Movie } from 'src/models/movies';
import { fakeMovies } from './fake-movies';

//Get data asynchronously with Observable
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(public messageService:MessageService) { }
  getMovie(): Observable<Movie[]>{
    this.messageService.add(`${ new Date().toLocaleString()}. Get movie list`);
    return of(fakeMovies)
  }
  getMovieById(id: string|null): Observable<Movie|undefined> {
    const a =Number(id)

    return of(fakeMovies.find(item=>item.id===a))}
}
