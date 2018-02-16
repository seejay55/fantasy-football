import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-league-accept',
  templateUrl: './league-accept.component.html',
  styleUrls: ['./league-accept.component.css']
})
export class LeagueAcceptComponent implements OnInit {

  private incomingInvitesUsers = [
    'Greyhound',
    'Berger and Fries',
    'Brunch King',
    'SeeJay',
    'Kratox',
    'Ridley'
  ];

  constructor() { }

  ngOnInit() {
  }

}
