import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NameCardComponent } from './name-card/name-card.component';
import { ParentComponent } from './parent/parent.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { RatingBarComponent } from './rating-bar/rating-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NameCardComponent,
    ParentComponent,
    ProgressBarComponent,
    CountdownTimerComponent,
    RatingBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
