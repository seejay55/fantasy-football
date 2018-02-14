import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FindCreateJoinPageComponent } from './pages/find-create-join-page/find-create-join-page.component';
import { FindCreateJoinPageContentComponent } from './components/find-create-join-page-content/find-create-join-page-content.component';


@NgModule({
  declarations: [
    AppComponent,
    FindCreateJoinPageComponent,
    FindCreateJoinPageContentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
