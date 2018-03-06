import { Component, OnInit, OnDestroy } from '@angular/core';

import { User } from '../../models/user';

import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-user-profile-page',
  templateUrl: './user-profile-page.component.html',
  styleUrls: ['./user-profile-page.component.css']
})
export class UserProfilePageComponent implements OnInit, OnDestroy {

  user: User;
  userSubscription: any;

  constructor(public authService: AuthService) { }

  ngOnInit() {
    this.userSubscription = this.authService.getCurrentUser()
      .subscribe(user => { this.user = user; });
  }

  ngOnDestroy() { this.userSubscription.unsubscribe(); }

}
