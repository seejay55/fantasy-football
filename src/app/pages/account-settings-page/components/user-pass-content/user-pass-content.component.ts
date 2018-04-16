import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { User } from '@models/user';

import { AlertService } from '@shared/services/alert.service';

@Component({
  selector: 'app-user-pass-content',
  templateUrl: './user-pass-content.component.html',
  styleUrls: ['./user-pass-content.component.css']
})
export class UserPassContentComponent implements OnInit {

  @Input() user: User;
  @Output() updateUser = new EventEmitter<any>();
  @Output() updateUserPassword = new EventEmitter<any>();

  constructor(private alertService: AlertService) { }

  ngOnInit() {
  }

  private sendUpdateUser(id: number, email: string, userName: string): boolean {
    this.updateUser.emit({ id, email, userName });
    return false;
  }

  private sendUpdateUserPassword(password: string, confirmPass: string): boolean {
    if (password === confirmPass) {
      this.updateUserPassword.emit(password);
    } else {
      this.alertService.warning('Error', 'Passwords do not match.', false);
    }
    return false;
  }
}
