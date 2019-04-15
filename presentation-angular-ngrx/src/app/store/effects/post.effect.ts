import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY, pipe } from 'rxjs';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { PostService } from '../../services/post.service';
import { ActionTypes, ActionsUnion, AddPost, SuccessAddPost, LoadPosts } from '../actions/post.actions';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/models/post.model';
import { Add } from '../actions/message.actions';
import { Message } from '../../models/message.model'

@Injectable()
export class PostEffects {

  @Effect()
  loadPosts$ = this.actions$
    .pipe(
      ofType(ActionTypes.LoadPosts),
      mergeMap(() => this.postService.list()
        .pipe(
          map(posts => ({ type: ActionTypes.SucessList, payload: posts })),
          catchError(() => EMPTY)
        ))
      );

  @Effect()
  addPost$ = this.actions$
    .pipe(
      ofType(ActionTypes.AddPost),
        map( (action: AddPost) => action.payload ),
          /*switchMap( payload => {
            return this.postService.add(payload)
              .pipe(
                map( post => ({ type: ActionTypes.SuccessAddPost, payload:post}) ),
                catchError(() => EMPTY)
              )
          }  )*/
          switchMap(payload => this.postService.add(payload)),
          switchMap( res => [
            new Add(new Message({content: "Article ajouté", type: "success"})),
            //new SuccessAddPost(res),
            new LoadPosts()
          ]),
          
        );

  constructor(
    private actions$: Actions,
    private postService: PostService,
    private store: Store<{ posts: Post[] }>
  ) {}
}