import { Action } from '@ngrx/store';

import { Message } from '../../models/message.model';
 
export enum ActionTypes {
  AddMessage = '[Message] Add',
  CleanMessage = '[Message] Clean',
  IsView = '[Message] Is View'
}
 
export class AddMessage implements Action {
  readonly type = ActionTypes.AddMessage;

  constructor(public payload: Message) {
  }
}

export class IsView implements Action {
  readonly type = ActionTypes.IsView;
}
 
export class CleanMessage implements Action {
  readonly type = ActionTypes.CleanMessage;
}

export type ActionMessage = AddMessage | IsView | CleanMessage;