import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';

// Nick
import { NavbarComponent } from './components/navbar/navbar.component';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BreadcrumbModule } from 'angular-crumbs';
import { ScoringLeadersPageComponent } from './pages/scoring-leaders-page/scoring-leaders-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ScoringLeadersPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    BreadcrumbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
