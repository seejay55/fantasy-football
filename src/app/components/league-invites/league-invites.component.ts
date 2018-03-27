import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Invite } from '../../models/invite';
import { UserService } from '../../services/user/user.service';
import { AlertService } from '../../shared/services/alert.service';

@Component({
  selector: 'app-league-invites',
  templateUrl: './league-invites.component.html',
  styleUrls: ['./league-invites.component.css'],
  providers: [UserService]
})
export class LeagueInvitesComponent implements OnInit {

  userId: number;
  invites: Invite[] = [];

  private incomingInvites = [
    {'senderID': 10000, 'senderName': 'SeeJay', 'leagueID': 88100, 'leagueName': 'Sunday Funday', 'sentDate': '03-02-2018'},
    {'senderID': 10001, 'senderName': 'Kratox', 'leagueID': 88101, 'leagueName': 'Eternal Battlegrounds', 'sentDate': '02-14-2018'},
    {'senderID': 10002, 'senderName': 'FrozenSoundtrack', 'leagueID': 88102, 'leagueName': `Preston's Game`, 'sentDate': '02-29-2018'}
  ];

// set up an onclick listener for hitting accept
// send the user info to the league table
// remove the invite from the incoming invites table
acceptListener(leagueId: number) {
  console.log('invite accepted');
  this.userService.acceptInvite(this.userId, leagueId).subscribe(
    (accepted) => {
      this.invites = this.invites.filter(
        league => league.leagueId === leagueId
      );
    },
    (err) => { this.alertService.danger(err.status, err.message, false); }
  );

}

// set up an onclick listener for hitting decline
// remove the invite from the incoming invites table
declineListener() {
  console.log('invite declined');
}

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private alertService: AlertService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.userId = params['userId'];
        this.userService.getInvites(this.userId).subscribe(
          (invites) => {
            invites.forEach((invite) => {
              const temp = new Invite(
                invite.SenderId,
                invite.SenderUsername,
                invite.SenderFirstName,
                invite.SenderLastName,
                invite.LeagueID,
                invite.LeagueName,
                invite.Date,
                invite.Age
              );
              this.invites.push(temp);
            });
            console.log(this.invites);
          },
          (err) => { console.log(err.error); }
        );
      });
  }

}
