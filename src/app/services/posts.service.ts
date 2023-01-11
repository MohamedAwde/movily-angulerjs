import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { PostsData } from '../models/posts.models';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
