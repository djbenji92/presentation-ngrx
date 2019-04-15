import { Action } from '@ngrx/store';
import { ActionTypes, ActionsUnion } from '../actions/post.actions';
 
export const initialState = [];
 
export function postReducer(state = initialState, action: ActionsUnion) {
  switch (action.type) {
    case ActionTypes.SucessList:
      return action.payload;

    case ActionTypes.SuccessAddPost:
      return  [...state, action.payload];
 
    default:
      return state;
  }
}