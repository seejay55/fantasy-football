import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { CreateLeaguePageComponent } from './create-league-page/create-league-page.component';

import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { NewsFeedComponent } from './components/homepage/news-feed/news-feed.component';
import { FeedItemComponent } from './components/homepage/news-feed/feed-item/feed-item.component';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LeagueAcceptComponent } from './components/league-accept/league-accept.component';
import { ParticipantSearchComponent } from './components/participant-search/participant-search.component';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateLeaguePageComponent
    HomepageComponent,
    LoginComponent,
    NewsFeedComponent,
    FeedItemComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
    LeagueAcceptComponent,
    ParticipantSearchComponent
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'homepage', pathMatch: 'full'},
      { path: 'homepage',                    component: NavbarComponent },
      { path: 'create-league',               component: NavbarComponent },
      { path: 'league-requests',             component: NavbarComponent },
      { path: 'register',                    component: NavbarComponent },
      { path: 'settings',                    component: NavbarComponent,
      children: [
        { path: 'settings/email-password',   component: NavbarComponent },
        { path: 'settings/edit-profile',     component: NavbarComponent },
        { path: 'settings/delete-profile',   component: NavbarComponent },
      ]},
      { path: 'find-user',                   component: NavbarComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
