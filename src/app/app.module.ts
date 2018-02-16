import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AccountSettingsPageComponent } from './pages/account-settings-page/account-settings-page.component';
import { SettingsTabsComponent } from './components/account-settings/settings-tabs/settings-tabs.component';
import { ProfileCardComponent } from './components/account-settings/profile-card/profile-card.component';
import { UserPassContentComponent } from './components/account-settings/settings-tabs/user-pass-content/user-pass-content.component';
import { EditAccContentComponent } from './components/account-settings/settings-tabs/edit-acc-content/edit-acc-content.component';
import { DeleteAccContentComponent } from './components/account-settings/settings-tabs/delete-acc-content/delete-acc-content.component';

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
    AccountSettingsPageComponent,
    SettingsTabsComponent,
    ProfileCardComponent,
    UserPassContentComponent,
    EditAccContentComponent,
    DeleteAccContentComponent
  ],
  imports: [
    BrowserModule,
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
