import { Component } from '@angular/core';
import { AuthService } from './services/auth/auth.service';
import { UserService } from './services/user/user.service';
import { BreadcrumbService } from 'angular-crumbs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthService, BreadcrumbService]
})
export class AppComponent {
  title = 'Fantasy Football Website';
}
