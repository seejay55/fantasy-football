import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';


import { FindCreateJoinPageComponent } from './pages/find-create-join-page/find-create-join-page.component';
import { FindCreateJoinPageContentComponent } from './components/find-create-join-page-content/find-create-join-page-content.component';
import { SettingsTabsComponent } from './components/account-settings/settings-tabs/settings-tabs.component';
import { ProfileCardComponent } from './components/account-settings/profile-card/profile-card.component';
import { UserPassContentComponent } from './components/account-settings/settings-tabs/user-pass-content/user-pass-content.component';
import { EditAccContentComponent } from './components/account-settings/settings-tabs/edit-acc-content/edit-acc-content.component';
import { DeleteAccContentComponent } from './components/account-settings/settings-tabs/delete-acc-content/delete-acc-content.component';
import { CreateLeaguePageComponent } from './components/create-league-page/create-league-page.component';
import { SearchLeaguePageComponent } from './components/search-league-page/search-league-page.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { NewsFeedComponent } from './components/homepage/news-feed/news-feed.component';
import { FeedItemComponent } from './components/homepage/news-feed/feed-item/feed-item.component';
import { LeagueAcceptComponent } from './components/league-accept/league-accept.component';
import { ParticipantSearchComponent } from './components/participant-search/participant-search.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    FindCreateJoinPageComponent,
    FindCreateJoinPageContentComponent,
    SettingsTabsComponent,
    ProfileCardComponent,
    UserPassContentComponent,
    EditAccContentComponent,
    DeleteAccContentComponent,
    NavbarComponent,
    HomepageComponent,
    NewsFeedComponent,
    FeedItemComponent,
    CreateLeaguePageComponent,
    LeagueAcceptComponent,
    LoginComponent,
    ParticipantSearchComponent,
    SearchLeaguePageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'homepage', pathMatch: 'full'},
      { path: 'homepage',                    component: HomepageComponent, data: {bread: 'Homepage'}},
      { path: 'create-league',               component: CreateLeaguePageComponent },
      { path: 'find-league',                 component: SearchLeaguePageComponent },
      { path: 'league-requests',             component: LeagueAcceptComponent },
      { path: 'register',                    component: LoginComponent },
      { path: 'settings',                    component: SettingsTabsComponent },
      { path: 'find-user',                   component: ParticipantSearchComponent },
      { path: 'welcome',                     component: FindCreateJoinPageComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
