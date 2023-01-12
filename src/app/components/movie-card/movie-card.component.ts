import { Component, Input } from '@angular/core';
import { MoviesData } from 'src/app/models/movies.models';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})
export class MovieCardComponent {
  @Input() moviesList: MoviesData = [];
}
