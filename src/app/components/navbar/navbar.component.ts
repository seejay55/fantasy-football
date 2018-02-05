import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  names: {name: String, route: String}[];

  constructor() {
    this.names = [
      { name: 'Create League', route: '/create-league'},
      { name: 'League Requests', route: '/league-requests'},
      { name: 'Find User', route: '/find-user'},
      { name: 'Account Settings', route: '/settings'},
    ];
  }

  ngOnInit() {
  }

}
