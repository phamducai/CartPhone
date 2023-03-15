import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/models/movies';
import { MovieService } from '../movie.service';

import {Location} from '@angular/common';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit  {
  constructor(  private route: ActivatedRoute,
    private movieService: MovieService,
    public location: Location){}

  ngOnInit() {

    this.getMovieFromRoute();
  }
  @Input()  movie: Movie | undefined ;
  getMovieFromRoute (): void{
  let id =this.route.snapshot.paramMap.get('id')

  this.movieService.getMovieById(id).subscribe(item => {

    return this.movie =item
  })
  }
  goBack(): void {
    this.location.back();
  }
}
