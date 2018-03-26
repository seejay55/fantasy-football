import { Component, ViewContainerRef } from '@angular/core';
import { AuthService } from './services/auth/auth.service';
import { UserService } from './services/user/user.service';
import { BreadcrumbService } from 'angular-crumbs';
import { AlertService } from './shared/services/alert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    AuthService,
    BreadcrumbService,
    AlertService
  ]
})


export class AppComponent {
  title = 'Fantasy Football Website';
  currentTheme: Theme;
  themes: Theme[] = [];

  constructor(private viewContainerRef: ViewContainerRef) {
    this.themes.push(
      new Theme('Light Theme', 'light-theme'),
      new Theme('Dark Theme', 'dark-theme'),
      new Theme('Rodgers Theme', 'rodgers-theme')
    );

    if (localStorage.getItem('theme')) {
      this.currentTheme = JSON.parse(localStorage.getItem('theme'));
    } else { this.currentTheme = this.themes[0]; }
    this.viewContainerRef.element.nativeElement.parentElement.classList.add(this.currentTheme.cssClass);
  }

  private setTheme(theme: Theme): void {
    this.viewContainerRef.element.nativeElement.parentElement.classList.remove(this.currentTheme.cssClass);
    this.currentTheme = theme;
    this.viewContainerRef.element.nativeElement.parentElement.classList.add(this.currentTheme.cssClass);
    localStorage.setItem('theme', JSON.stringify(this.currentTheme));
  }
}

export class Theme {
  public themeName;
  public cssClass;

  constructor(themeName: string, cssClass: string) {
    this.themeName = themeName;
    this.cssClass = cssClass;
  }

}
