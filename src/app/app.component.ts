import { Component } from '@angular/core';
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
}
