import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LottieAnimationViewModule } from 'ng-lottie';

import { AppComponent } from './app.component';
import { LoadingViewEditionsComponent } from './components/loading-view-editions/loading-view-editions.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadingViewEditionsComponent
  ],
  imports: [
    BrowserModule,
    LottieAnimationViewModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
