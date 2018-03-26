import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-league-invites',
  templateUrl: './league-invites.component.html',
  styleUrls: ['./league-invites.component.css']
})
export class LeagueInvitesComponent implements OnInit {

  private incomingInvites=[
    {"senderID": 10000, "senderName":"SeeJay", "leagueID":88100, "leagueName":"Sunday Funday", "sentDate":"03-02-2018"},
    {"senderID": 10001, "senderName":"Kratox", "leagueID":88101, "leagueName":"Eternal Battlegrounds", "sentDate":"02-14-2018"},
    {"senderID": 10002, "senderName":"FrozenSoundtrack", "leagueID":88102, "leagueName":"Preston's Game", "sentDate":"02-29-2018"}
  ];

// set up an onclick listener for hitting accept
// send the user info to the league table
// remove the invite from the incoming invites table
acceptListener(){
  console.log("invite accepted");
}

// set up an onclick listener for hitting decline
// remove the invite from the incoming invites table
declineListener(){
  console.log("invite declined");
}

  constructor() { }

  ngOnInit() {
  }

}
