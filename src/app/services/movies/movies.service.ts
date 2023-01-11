import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  getTrendingMovies() {
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
