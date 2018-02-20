import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

// Nick
import { NavbarComponent } from './components/navbar/navbar.component';
// Austin
import { RegisterWelcomeComponent } from './components/register-welcome/register-welcome.component';
import { ProfileCardComponent } from './components/account-settings/profile-card/profile-card.component';
import { SettingsTabsComponent } from './components/account-settings/settings-tabs/settings-tabs.component';
import { UserPassContentComponent } from './components/account-settings/settings-tabs/user-pass-content/user-pass-content.component';
import { EditAccContentComponent } from './components/account-settings/settings-tabs/edit-acc-content/edit-acc-content.component';
import { DeleteAccContentComponent } from './components/account-settings/settings-tabs/delete-acc-content/delete-acc-content.component';
// Luke
import { HomepageComponent } from './components/homepage/homepage.component';
import { NewsFeedComponent } from './components/homepage/news-feed/news-feed.component';
import { RegisterAccountComponent } from './components/register-account/register-account.component';
import { FeedItemComponent } from './components/homepage/news-feed/feed-item/feed-item.component';
// CJ
// Josh
// Riley
import { FindLeagueComponent } from './components/find-league/find-league.component';
import { CreateLeagueComponent } from './components/create-league/create-league.component';
// Preston
import { FindUserComponent } from './components/find-user/find-user.component';
import { LeagueInvitesComponent } from './components/league-invites/league-invites.component';


import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BreadcrumbModule } from 'angular-crumbs';

@NgModule({
  declarations: [
    AppComponent,
    RegisterWelcomeComponent,
    SettingsTabsComponent,
    ProfileCardComponent,
    UserPassContentComponent,
    EditAccContentComponent,
    DeleteAccContentComponent,
    NavbarComponent,
    HomepageComponent,
    NewsFeedComponent,
    FeedItemComponent,
    RegisterAccountComponent,
    LeagueInvitesComponent,
    CreateLeagueComponent,
    FindLeagueComponent,
    FindUserComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    BreadcrumbModule,
    RouterModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'homepage', pathMatch: 'full'},
      { path: 'homepage',           component: HomepageComponent,         data: { breadcrumb: 'Homepage'}},
      { path: 'create-league',      component: CreateLeagueComponent,     data: { breadcrumb: 'Create League'}},
      { path: 'find-league',        component: FindLeagueComponent,       data: { breadcrumb: 'Find League'}},
      { path: 'league-invites',     component: LeagueInvitesComponent,    data: { breadcrumb: 'League Invites'}},
      { path: 'register-account',   component: RegisterAccountComponent,  data: { breadcrumb: 'Register Account'}},
      { path: 'settings',           component: SettingsTabsComponent,     data: { breadcrumb: 'Account Settings'}},
      { path: 'find-user',          component: FindUserComponent,         data: { breadcrumb: 'Find User'}},
      { path: 'welcome',            component: RegisterWelcomeComponent,  data: { breadcrumb: 'Welcome'}}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
