import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-p',
  templateUrl: './p.component.html',
  styleUrls: ['./p.component.css'],
})
export class PComponent implements OnInit {
  postid?: number;

  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.postid = parseInt(this.router.snapshot.params['postid']);
    console.log({ postid: this.postid });
  }
}
