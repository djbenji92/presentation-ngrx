import { Action } from '@ngrx/store';
import { ActionTypes, ActionMessage } from '../actions/message.actions';
 
export const initialState = null;
 
export function messageReducer(state = initialState, action: ActionMessage) {
  switch (action.type) {
    case ActionTypes.AddMessage:
      return action.payload;
 
    case ActionTypes.CleanMessage:
      return null;

    case ActionTypes.IsView:
      return { ...state, view: true}
 
    default:
      return state;
  }
}