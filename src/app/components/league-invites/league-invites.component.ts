import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-league-invites',
  templateUrl: './league-invites.component.html',
  styleUrls: ['./league-invites.component.css']
})
export class LeagueInvitesComponent implements OnInit {

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
