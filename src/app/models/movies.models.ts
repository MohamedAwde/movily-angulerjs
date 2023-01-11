export type MoviesData = MovieData[];

export interface MovieData {
  id: number;
  name: string;
  cover: string;
  rating: number;
  reviews: Review[];
}

export interface Review {
  author: string;
  published_on: string;
  review: string;
  rating: number;
}
