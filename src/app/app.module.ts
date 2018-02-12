import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CreateLeaguePageComponent } from './create-league-page/create-league-page.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateLeaguePageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
