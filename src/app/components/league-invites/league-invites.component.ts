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

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private alertService: AlertService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.userId = params['userId'];
        this.getInvites(this.userId);
      });
  }

  private getInvites(userId: number): void {
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
  }

  // accept league invite based on currentUser id and invite's league id
  private acceptInvite(leagueId: number): void {
    this.userService.acceptInvite(this.userId, leagueId).subscribe(
      (success) => {
        this.updateInvites(leagueId);
        this.alertService.success('Success', `You have been added to the league.`, false);
      },
      (err) => {
        console.log(err); this.alertService.danger(err.name, err.message, false);
      }
    );
  }

  private declineInvite(leagueId: number): void {
    this.userService.declineInvite(this.userId, leagueId).subscribe(
      (success) => {
        this.updateInvites(leagueId);
        this.alertService.success('Success', `Invite has been declined.`, false);
      },
      (err) => { console.log(err); this.alertService.danger(err.name, err.message, false); }
    );
  }

  private updateInvites(leagueId: number): void {
    this.invites = this.invites.filter(
      invite => invite.leagueId !== leagueId
    );
  }

}
