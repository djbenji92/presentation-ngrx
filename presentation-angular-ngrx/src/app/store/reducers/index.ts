import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';


import { counterReducer } from './counter.reducer';
import { environment } from '../../../environments/environment';
import { postReducer } from './post.reducer';

export interface State {

}

export const reducers: ActionReducerMap<State> = {
  count : counterReducer,
  posts: postReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
