import { Movie } from 'src/app/movie';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.sass'],
})
export class MoviesComponent implements OnInit {
  movie?: Movie;

  constructor(private service: ApiService) {}
  pegarFilmes() {}

  ngOnInit() {
    this.service.fetch().subscribe((movies) => {
      this.movie = movies[0];
    });
  }
}
