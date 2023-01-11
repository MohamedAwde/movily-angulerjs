import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  all_posts?: any = [];
  pageCount = 1;
  postsPerPage = 10;
  currentPosts: any = [];

  constructor(
    private postsService: PostsService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.pageCount = this.router.snapshot.params['pageid'] || 1;
    this.postsService.getPosts().subscribe({
      next: (res) => {
        this.all_posts = res;

        const indexOfLastPost = this.pageCount * this.postsPerPage;
        const indexOfFirstPost = indexOfLastPost - this.postsPerPage;

        this.currentPosts = this.all_posts.slice(
          indexOfFirstPost,
          indexOfLastPost
        );
      },
    });
  }

  nextPage() {}
}
