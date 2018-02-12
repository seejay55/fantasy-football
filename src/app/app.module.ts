import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccountSettingsPageComponent } from './pages/account-settings-page/account-settings-page.component';
import { SettingsTabsComponent } from './components/account-settings/settings-tabs/settings-tabs.component';
import { ProfileCardComponent } from './components/account-settings/profile-card/profile-card.component';
import { UserPassContentComponent } from './components/account-settings/settings-tabs/user-pass-content/user-pass-content.component';
import { EditAccContentComponent } from './components/account-settings/settings-tabs/edit-acc-content/edit-acc-content.component';
import { DeleteAccContentComponent } from './components/account-settings/settings-tabs/delete-acc-content/delete-acc-content.component';


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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
