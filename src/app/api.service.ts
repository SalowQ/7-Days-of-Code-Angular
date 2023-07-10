import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './movie';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly API = 'https://swapi.dev/api/';
  constructor(private http: HttpClient) {}

  fetchMovies(): Observable<Array<Movie>> {
    return this.http.get<any>(`${this.API}films`).pipe(
      map((response) => {
        const movies: Array<Movie> = response.results;
        return movies;
      }),
    );
  }
}
