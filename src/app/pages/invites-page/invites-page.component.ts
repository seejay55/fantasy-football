import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Invite } from '@models/invite';
import { UserService } from '@services/user/user.service';
import { AlertService } from '@shared/services/alert.service';

@Component({
    selector: 'app-invites-page',
    templateUrl: './invites-page.component.html',
    styleUrls: ['./invites-page.component.css'],
    providers: [UserService] 
})
export class InvitesPageComponent implements OnInit {

    userId: number;
    invites: Invite[] = [];
    acceptingLeagueId = null;

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
            (err) => { this.alertService.danger('Error', 'Could not get invites.', false); }
        );
    }

    // accept league invite based on currentUser id and invite's league id
    private acceptInvite(teamName: string): void {
        if (teamName === '') {
            this.alertService.warning('Message', 'Your team needs to have a valid name.', false);
        } else {
            this.userService.acceptInvite(this.userId, this.acceptingLeagueId, teamName).subscribe(
                (success) => {
                    this.updateInvites(this.acceptingLeagueId);
                    this.alertService.success('Success', `You have been added to the league with Team ${teamName}.`, false);
                },
                (err) => {
                    console.log(err); this.alertService.danger(err.name, err.message, false);
                }
            );
        }
    }

    private declineInvite(leagueId: number): void {
        this.userService.declineInvite(this.userId, leagueId).subscribe(
            (success) => {
                this.updateInvites(leagueId);
                this.alertService.info('Deleted', `Invite has been successfully declined.`, false);
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
