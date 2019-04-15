import { Action } from '@ngrx/store';
import { ActionTypes, ActionMessage } from '../actions/message.actions';
 
export const initialState = null;
 
export function messageReducer(state = initialState, action: ActionMessage) {
  switch (action.type) {
    case ActionTypes.Add:
      return action.payload;
 
    case ActionTypes.Clean:
      return null;

    case ActionTypes.IsView:
      return { state, view: true}
 
    default:
      return state;
  }
}