import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store/reducers';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { FormPostComponent } from './form-post/form-post.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { PostEffects } from './store/effects/post.effect'
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { ListPostsComponent } from './list-posts/list-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent,
    FormPostComponent,
    ListPostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([PostEffects]),

    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }), 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
