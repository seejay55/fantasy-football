import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  route: string;

  constructor(private router: Router) {
    this.user = null;
    router.events.subscribe((url: any) => this.route = url);
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
