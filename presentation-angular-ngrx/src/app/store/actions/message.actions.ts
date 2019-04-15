import { Action } from '@ngrx/store';

import { Message } from '../../models/message.model';
 
export enum ActionTypes {
  Add = '[Message] Add',
  Clean = '[Message] Clean',
  IsView = '[Message] Is View'
}
 
export class Add implements Action {
  readonly type = ActionTypes.Add;

  constructor(public payload: Message) {
  }
}

export class IsView implements Action {
  readonly type = ActionTypes.IsView;
}
 
export class Clean implements Action {
  readonly type = ActionTypes.Clean;
}

export type ActionMessage = Add | IsView | Clean;