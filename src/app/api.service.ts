import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './movie';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  fetch(): Observable<Array<Movie>> {
    return this.http.get<any>('../assets/films.json').pipe(
      map((response) => {
        const movies: Array<Movie> = response.results;
        return movies;
      }),
    );
  }
}
