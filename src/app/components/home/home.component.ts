import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { MoviesData } from 'src/app/models/movies.models';
import { MoviesService } from 'src/app/services/movies/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  trendingMovies: MoviesData = [];
  popularMovies: MoviesData = [];
  trendingMoviesSubsciption?: Subscription;
  popularMoviesSubsciption?: Subscription;

  constructor(private moveiesService: MoviesService) {}

  ngOnInit(): void {
    this.trendingMoviesSubsciption = this.moveiesService
      .getTrendingMovies()
      .subscribe({
        next: (data) => {
          this.trendingMovies = data as MoviesData;
        },
      });

    this.popularMoviesSubsciption = this.moveiesService
      .getPopularMovies()
      .subscribe({
        next: (data) => {
          this.popularMovies = data as MoviesData;
        },
      });
  }

  ngOnDestroy(): void {
    this.trendingMoviesSubsciption?.unsubscribe();
    this.popularMoviesSubsciption?.unsubscribe();
  }
}
