import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY, pipe, Observable, of } from 'rxjs';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { PostService } from '../../services/post.service';
import { ActionTypes, ActionsUnion, AddPost, SuccessAddPost, LoadPosts } from '../actions/post.actions';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/models/post.model';
import { AddMessage } from '../actions/message.actions';
import { Message } from '../../models/message.model'
import { ActionTypes as ActionTypeMessage } from '../actions/message.actions';

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
          switchMap(payload => this.postService.add(payload)),
          pipe(
            switchMap( res => [
              new AddMessage(new Message({content: "Article ajouté", type: "success"})),
              //new SuccessAddPost(res),
              new LoadPosts()
            ]),
            catchError( (error) => {
              let message = new Message({content: "Erreur - Impossible d'ajouter l'article", type: "error"});
              return of({
                type: ActionTypeMessage.AddMessage,
                payload: message
              });
            } )
          )
          
          
        );

  constructor(
    private actions$: Actions,
    private postService: PostService,
    private store: Store<{ posts: Post[] }>
  ) {}
}