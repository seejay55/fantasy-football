import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../services/auth/auth.service';

import { User } from '../../models/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, OnDestroy {

  navMenu = [
    {
      name: 'Leagues',
      children: [
        { name: 'Find League', route: '/find-league', active: true, dividerBelow: false },
        { name: 'Create League', route: '/create-league', active: true, dividerBelow: false },
        { name: 'League Invites', route: '/league-invites', active: true, dividerBelow: false }
      ]
    },
    {
      name: 'Find Users',
      children: [
        { name: 'Find User', route: '/find-user', active: true, dividerBelow: false },
      ]
    }
  ];

  user: User;
  userSubscription: any;

  constructor(private router: Router, public authService: AuthService) { }

  ngOnInit() {
    // Subscribe to currentUser information
    this.userSubscription = this.authService.getCurrentUser().subscribe(user => {
      this.user = user;
    });
  }

  ngOnDestroy() { this.userSubscription.unsubscribe(); }

  logIn(email: string, password: string) {
    console.log('Sending email and password to authenticate: ', { email, password });
    this.authService.login(email, password);
  }

  logOut() {
    this.authService.logout();
  }

}
