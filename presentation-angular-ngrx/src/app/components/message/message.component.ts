import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/models/message.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { MatSnackBar } from '@angular/material';
import { Clean, IsView } from 'src/app/store/actions/message.actions';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  message$: Observable<Message>;

  constructor(private store: Store<{ message: Message }>, private snackBar: MatSnackBar) {
    this.message$ = store.select(state => {
      if(state.message && state.message.view === false){
        store.dispatch(new IsView());
        this.openSnakBar(state.message);
      }

      return state.message;
    })
   }

  ngOnInit() {
  }

  openSnakBar(message: Message){
    let snackBarRef = this.snackBar.open(message.content, 'Fermer', {
      duration: 2000,
    });

    snackBarRef.afterDismissed().subscribe(() => {
      this.store.dispatch(new Clean());
    });
  }



}
