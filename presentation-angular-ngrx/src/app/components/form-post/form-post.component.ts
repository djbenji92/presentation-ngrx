import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Post } from '../../models/post.model';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AddPost } from '../../store/actions/post.actions';

@Component({
  selector: 'app-form-post',
  templateUrl: './form-post.component.html',
  styleUrls: ['./form-post.component.scss']
})
export class FormPostComponent implements OnInit {

  postForm = new FormGroup({
    title: new FormControl(''),
    content: new FormControl(''),
  });

  constructor(
    private store: Store<{ posts: Post[] }>
  ) { 
    
  }

  ngOnInit() {
  }

  onSubmit(){
    this.store.dispatch(new AddPost(this.postForm.value));
    this.postForm.reset();
  }

}
