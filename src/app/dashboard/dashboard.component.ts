import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/models/movies';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  movies: Movie[]=[];
constructor(private movieService:MovieService){}
  ngOnInit(): void {

    this.getmovies()
    console.log(this.movies)
  }
  getmovies(): void {
    this.movieService.getMovie().subscribe(item=>this.movies = item.slice(1,5))

  }

}
