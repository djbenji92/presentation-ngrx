import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.sass']
})
export class ListPostsComponent implements OnInit {

  constructor(private store: Store<{ posts: Post[] }>) {
    this.posts$ = store.pipe(select('posts'));
   }

  posts$: Observable<Post[]>;

  ngOnInit() {
    this.store.dispatch({ type: '[Posts Page] Load Posts' });
  }

}
