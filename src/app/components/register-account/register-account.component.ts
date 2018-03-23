import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-register-account',
  templateUrl: './register-account.component.html',
  styleUrls: ['./register-account.component.css']
})
export class RegisterAccountComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  registerAccount(email: string, userName: string, firstName: string, lastName: string, password: string, confirmPass: string) {
    if (password === confirmPass) {
      
    } else {
      window.alert("Passwords do not match");
    }
  }

}
