import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: {
    firstName: string,
    lastName: string,
    userName: string
  };

  constructor() {
    this.user = null;
  }

  ngOnInit() {
  }

  private toggleTestUser() {
    if (this.user == null) {
      this.user = {
        firstName: 'Test',
        lastName: 'User',
        userName: '@testUser'
      };
    } else { this.user = null; }
    console.log(this.user);
  }

}
