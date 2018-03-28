import { Component, OnInit } from '@angular/core';

import { User } from '../../../models/user';
import { AuthService } from '../../../services/auth/auth.service';
import { UserService } from '../../../services/user/user.service';
import { AlertService } from '../../../shared/services/alert.service';

@Component({
  selector: 'app-settings-tabs',
  templateUrl: './settings-tabs.component.html',
  styleUrls: ['./settings-tabs.component.css'],
  providers: [UserService]
})
export class SettingsTabsComponent implements OnInit {

  user: User;
  userSubscription: any;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.userSubscription = this.authService.getCurrentUser()
      .subscribe( user => { this.user = user; } );
  }

  private updateUser(info: any): void {
    this.userService.updateUser(info.id, info.email, info.userName).subscribe(
      (userUpdated) => {
        const updatedUser: User = this.user;
        updatedUser.email = info.email;
        updatedUser.userName = info.userName;
        this.alertService.success('Success', 'Your account information has been updated', false);
        this.authService.setCurrentUser(updatedUser);
      },
      (err) => { console.log(err); }
    );
  }

  private updateUserPassword(password: string) {
    console.log(password);
    this.userService.updateUserPassword(this.user._id, password).subscribe(
      (updatedPassword) => { this.alertService.success('Success', 'Password has been updated', true); },
      (err) => { console.log(err); }
    );
  }

  private deleteUserAccount(): void {
    console.log("Running deleteUserAccount()")
    this.userService.deleteUser(this.user._id).subscribe(
      (deleteUser) => { 
          this.alertService.success('Success', 'User has been deleted', true);
          this.authService.logout();
        },
      (err) => { console.log(err); }
    );
  }

}
