import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';

// Nick
import { NavbarComponent } from './components/navbar/navbar.component';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BreadcrumbModule } from 'angular-crumbs';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BreadcrumbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
