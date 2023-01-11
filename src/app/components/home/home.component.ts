import { Component, OnInit } from '@angular/core';
import { MoviesData } from 'src/app/models/movies.models';
import { MoviesService } from 'src/app/services/movies/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  trendingMovies: MoviesData = [];

  constructor(private moveiesService: MoviesService) {}

  ngOnInit(): void {
    this.moveiesService.getTrendingMovies().subscribe({
      next: (data) => {
        this.trendingMovies = data as MoviesData;
      },
    });
  }
}
