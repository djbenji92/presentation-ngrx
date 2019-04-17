import { Action } from '@ngrx/store';
import { Post } from '../../models/post.model';
 
export enum ActionTypes {
  LoadPosts = '[Posts] Load Posts',
  SucessList = '[Posts - API] Posts Loaded Success',

  AddPost = '[Posts] Add Post',
  SuccessAddPost = '[Posts - API] Post created',
}

export class LoadPosts implements Action {
  readonly type = ActionTypes.LoadPosts;
}
 
export class SucessList implements Action {
  readonly type = ActionTypes.SucessList;

  constructor(public payload: Post[]) {
  }
}
 
export class AddPost implements Action {
  readonly type = ActionTypes.AddPost;

  constructor(public payload: Post) {
  }
}

export class SuccessAddPost implements Action {
  readonly type = ActionTypes.SuccessAddPost;

  constructor(public payload: Post){}
}


export type ActionsUnion = LoadPosts | SucessList | SuccessAddPost;