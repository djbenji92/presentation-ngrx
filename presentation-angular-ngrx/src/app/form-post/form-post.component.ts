import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PostService } from '../services/post.service';
import { Post } from '../models/post.model';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AddPost } from '../store/actions/post.actions';

@Component({
  selector: 'app-form-post',
  templateUrl: './form-post.component.html',
  styleUrls: ['./form-post.component.sass']
})
export class FormPostComponent implements OnInit {

  postForm = new FormGroup({
    title: new FormControl(''),
    content: new FormControl(''),
  });

  constructor(
    private postService: PostService,
    private store: Store<{ posts: Post[] }>
  ) { 
    
  }

  ngOnInit() {
  }

  onSubmit(){
    this.store.dispatch(new AddPost(this.postForm.value));
    /*this.postService.add(this.postForm.value).subscribe(res => {
      console.log(res);
      this.store.dispatch({ type: '[Posts Page] Load Posts' });
    });*/

  }

}
