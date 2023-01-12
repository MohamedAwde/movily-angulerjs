import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieData } from 'src/app/models/movies.models';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  getTrendingMovies(): Observable<Object> {
    return this.http.get(
      'http://localhost:4200/assets/data/trending-movies.json'
    );
  }
  getPopularMovies() {
    return this.http.get(
      'http://localhost:4200/assets/data/popular-movies.json'
    );
  }
  getTheatreMovies() {
    return this.http.get(
      'http://localhost:4200/assets/data/theatre-movies.json'
    );
  }
}
