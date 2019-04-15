import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../../models/post.model';
import { Store, select } from '@ngrx/store';
import { LoadPosts } from 'src/app/store/actions/post.actions';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.scss']
})
export class ListPostsComponent implements OnInit {

  constructor(private store: Store<{ posts: Post[] }>) {
    this.posts$ = store.select('posts');
   }

  posts$: Observable<Post[]>;

  ngOnInit() {
    this.store.dispatch(new LoadPosts())
  }

}
