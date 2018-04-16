import { Component, OnInit } from '@angular/core';

import { User } from '@models/user';

import { AuthService } from '@services/auth/auth.service';
import { UserService } from '@services/user/user.service';
import { AlertService } from '@shared/services/alert.service';

@Component({
  selector: 'app-account-settings-page',
  templateUrl: './account-settings-page.component.html',
  styleUrls: ['./account-settings-page.component.css'],
  providers: [UserService]
})
export class AccountSettingsPageComponent implements OnInit {

  user: User;
  userSubscription: any;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.userSubscription = this.authService.getCurrentUser()
      .subscribe(
        (user) => { this.user = user; },
        (err) => { this.alertService.danger('Error', 'Could not obtain user information.', false); }
      );
  }

  private updateUser(info: any): void {
    this.userService.updateUser(info.id, info.email, info.userName).subscribe(
      (userUpdated) => {
        const updatedUser: User = this.user;
        updatedUser.email = info.email;
        updatedUser.userName = info.userName;
        this.alertService.success('Success', 'Your account information has been updated.', false);
        this.authService.setCurrentUser(updatedUser);
      },
      (err) => { this.alertService.danger('Error', 'There was a problem updating your account.', false); }
    );
  }

  private updateUserPassword(password: string) {
    console.log(password);
    this.userService.updateUserPassword(this.user._id, password).subscribe(
      (updatedPassword) => { this.alertService.success('Success', 'Password has been updated', true); },
      (err) => { this.alertService.danger('Error', 'There was a problem updating your account.', false); }
    );
  }

  private deleteUserAccount(): void {
    this.userService.deleteUser(this.user._id).subscribe(
      (deletedUser) => {
          this.alertService.success('Success', 'User has been deleted', true);
          this.authService.logout();
      },
      (err) => { this.alertService.danger('Error', 'There was a problem deleting your account.', false); }
    );
  }

}
