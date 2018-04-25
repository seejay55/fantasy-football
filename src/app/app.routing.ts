import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

// Nick
import { UserProfilePageComponent } from './pages/user-profile-page/user-profile-page.component';
import { LeagueTableComponent } from './pages/user-profile-page/components/league-table/league-table.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
// Austin
import { AccountSettingsPageComponent } from './pages/account-settings-page/account-settings-page.component';
import { ProfileCardComponent } from './pages/account-settings-page/components/profile-card/profile-card.component';
import { UserPassContentComponent } from './pages/account-settings-page/components/user-pass-content/user-pass-content.component';
import { EditAccContentComponent } from './pages/account-settings-page/components/edit-acc-content/edit-acc-content.component';
import { DeleteAccContentComponent } from './pages/account-settings-page/components/delete-acc-content/delete-acc-content.component';
import { LeagueInformationPageComponent } from './pages/league-information-page/league-information-page.component';
import { RegisterWelcomePageComponent } from './pages/register-welcome-page/register-welcome-page.component';
// Luke
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NewsFeedComponent } from './pages/home-page/components/news-feed/news-feed.component';
import { FeedItemComponent } from './pages/home-page/components/news-feed/feed-item/feed-item.component';
import { RegisterAccountPageComponent } from './pages/register-account-page/register-account-page.component';
import { ScoringLeadersPageComponent } from './pages/scoring-leaders-page/scoring-leaders-page.component';
// Riley
import { FindLeaguePageComponent } from './pages/find-league-page/find-league-page.component';
import { CreateLeaguePageComponent } from './pages/create-league-page/create-league-page.component';
import { LeagueOptionsPageComponent } from './pages/league-options-page/league-options-page.component';
// Preston
import { FindUserPageComponent } from './pages/find-user-page/find-user-page.component';
import { InvitesPageComponent } from './pages/invites-page/invites-page.component';
// CJ
// Josh


const routes: Routes = [
  { path: '', redirectTo: 'homepage', pathMatch: 'full'},
  // Nick
  { path: 'user/:userName',                   component: UserProfilePageComponent,        data: { breadcrumb: 'Profile Page'}},
  { path: '404',                              component: NotFoundPageComponent,           data: { breadcrumb: '404: Page Not Found!'}},
  // Austin
  { path: 'user/:userName/account-settings',  component: AccountSettingsPageComponent,           data: { breadcrumb: 'Account Settings'}},
  { path: 'league/:leagueId',                       component: LeagueInformationPageComponent,  data: { breadcrumb: 'League Information'}},
  { path: 'welcome',                          component: RegisterWelcomePageComponent,        data: { breadcrumb: 'Welcome'}},
  // Luke
  { path: 'homepage',                         component: HomePageComponent,               data: { breadcrumb: 'Homepage'}},
  { path: 'register',                         component: RegisterAccountPageComponent,        data: { breadcrumb: 'Register Account'}},
  { path: 'scoring-leaders',                  component: ScoringLeadersPageComponent,     data: { breadcrumb: 'Scoring Leaders'}},
  // Riley
  { path: 'create-league',                    component: CreateLeaguePageComponent,           data: { breadcrumb: 'Create League'}},
  { path: 'find-league',                      component: FindLeaguePageComponent,             data: { breadcrumb: 'Find League'}},
  { path: 'league-options',                   component: LeagueOptionsPageComponent,          data: { breadcrumb: 'League Options'}},
  // Preston
  { path: 'find-user',                        component: FindUserPageComponent,               data: { breadcrumb: 'Find User'}},
  { path: 'user/:userId/invites',             component: InvitesPageComponent,          data: { breadcrumb: 'Invites'}},

  { path: '**', redirectTo: '404'},

];

@NgModule({
  declarations: [
    ProfileCardComponent,
    UserPassContentComponent,
    EditAccContentComponent,
    DeleteAccContentComponent,
    NewsFeedComponent,
    FeedItemComponent,
    UserProfilePageComponent,
    NotFoundPageComponent,
    LeagueTableComponent,
    ScoringLeadersPageComponent,
    LeagueInformationPageComponent,
    AccountSettingsPageComponent,
    CreateLeaguePageComponent,
    FindLeaguePageComponent,
    FindUserPageComponent,
    HomePageComponent,
    InvitesPageComponent,
    RegisterAccountPageComponent,
    RegisterWelcomePageComponent,
    LeagueOptionsPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
