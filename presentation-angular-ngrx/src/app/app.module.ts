import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store/reducers';
import { MyCounterComponent } from './components/my-counter/my-counter.component';
import { FormPostComponent } from './components/form-post/form-post.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { PostEffects } from './store/effects/post.effect'
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { ListPostsComponent } from './components/list-posts/list-posts.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatButtonModule, MatToolbarModule, MatFormFieldModule, MatInputModule, MatDividerModule, MatSnackBarModule} from '@angular/material';
import { MessageComponent } from './components/message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent,
    FormPostComponent,
    ListPostsComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([PostEffects]),

    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }), 

    MatButtonModule, MatToolbarModule, MatFormFieldModule, MatInputModule, MatDividerModule, MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
