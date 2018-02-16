import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
