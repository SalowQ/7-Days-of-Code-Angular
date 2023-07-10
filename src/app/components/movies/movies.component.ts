import { Movie } from 'src/app/movie';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.sass'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'),
      ),
    ]),
  ],
})
export class MoviesComponent implements OnInit {
  movies?: Movie[];

  dataSource = MOVIES_DATA;
  columnsToDisplay = [
    'episode_id',
    'title',
    'director',
    'producer',
    'release_date',
  ];
  columnNames: { [key: string]: string } = {
    episode_id: 'Episode',
    title: 'Title',
    director: 'Director',
    producer: 'Producer',
    release_date: 'Release Date',
  };
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedMovie?: Movie | null;

  constructor(private service: ApiService) {}

  ngOnInit() {
    this.service.fetch().subscribe((movies) => {
      this.movies = movies;
      this.dataSource = movies;
      console.log(this.dataSource);
    });
  }
}

const MOVIES_DATA: Movie[] = [];
