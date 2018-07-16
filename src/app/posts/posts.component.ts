import { Component, OnInit } from '@angular/core';
import { DbmanagerService } from '../dbmanager.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts$: Object;

  constructor(private dbmanager: DbmanagerService) { }

  ngOnInit() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    this.dbmanager.cloudGet(url).subscribe(
      data => {
        this.posts$ = data;
      }
    );
  }

}
