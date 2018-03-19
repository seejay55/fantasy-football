import { Component, OnInit } from '@angular/core';

import { User } from '../../../models/user';
import { AuthService } from '../../../services/auth/auth.service';
import { UserService } from '../../../services/user/user.service';

@Component({
  selector: 'app-settings-tabs',
  templateUrl: './settings-tabs.component.html',
  styleUrls: ['./settings-tabs.component.css'],
  providers: [UserService]
})
export class SettingsTabsComponent implements OnInit {

  user: User;
  userSubscription: any;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.userSubscription = this.authService.getCurrentUser()
      .subscribe( user => { this.user = user; } );
  }

}
