import { Component, OnInit } from '@angular/core';
import { User } from '@models/user';

import { UserService } from '@services/user/user.service';
import { AlertService } from '@shared/services/alert.service';

@Component({
  selector: 'app-register-account-page',
  templateUrl: './register-account-page.component.html',
  styleUrls: ['./register-account-page.component.css'],
  providers: [UserService]
})
export class RegisterAccountPageComponent implements OnInit {

  constructor(private userService: UserService, private alertService: AlertService) { }

  ngOnInit() {
  }

  registerAccount(email: string, userName: string, firstName: string, lastName: string, password: string, confirmPass: string) {
    if (password === confirmPass) {
      this.userService.createUser(email, userName, firstName, lastName, password).subscribe(
        (success) => { this.alertService.success('Success', 'Your account has been created.'); },
        (err) => { this.alertService.warning(err.status, err.message, false); }
      );
    } else {
      this.alertService.warning('Insufficent Data', 'Passwords do not match.', false);
    }
  }

}