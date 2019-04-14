import { Action } from '@ngrx/store';
import { ActionTypes, ActionsUnion } from '../actions/post.actions';
 
export const initialState = [];
 
export function postReducer(state = initialState, action: ActionsUnion) {
  switch (action.type) {
    case ActionTypes.SucessList:
      return action.payload;

    case ActionTypes.SuccessAddPost:
    let newState = [...state, action.payload]
    console.log(action );
      return  [...state, action.payload];
 
    default:
      return state;
  }
}