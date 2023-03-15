import { Component,OnInit } from '@angular/core';
import { Movie } from 'src/models/movies';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit{
  movies :Movie[] | undefined;
  constructor(private  movieService: MovieService) { }
  selectedMovie: Movie | undefined;
  onSelect(movie: Movie):void{
    this.selectedMovie = movie;
} ngOnInit() {
  this.getMoviesFromServices();
}
getMoviesFromServices(): void {
  this.movieService.getMovie().subscribe(updatedMovies => this.movies = updatedMovies);
}
}
