import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';
=======
>>>>>>> origin/luke_scoringleaders
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';

// Nick
import { NavbarComponent } from './components/navbar/navbar.component';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
<<<<<<< HEAD
import { BreadcrumbModule } from 'angular-crumbs';
=======
import { BreadcrumbModule } from 'angular-crumbs';
import { ScoringLeadersPageComponent } from './pages/scoring-leaders-page/scoring-leaders-page.component';
>>>>>>> origin/luke_scoringleaders

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
<<<<<<< HEAD
=======
    ScoringLeadersPageComponent,
>>>>>>> origin/luke_scoringleaders
  ],
  imports: [
    BrowserModule,
    HttpModule,
<<<<<<< HEAD
    HttpClientModule,
=======
>>>>>>> origin/luke_scoringleaders
    FormsModule,
    BreadcrumbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
<<<<<<< HEAD
export class AppModule { }
=======
export class AppModule { }
>>>>>>> origin/luke_scoringleaders
