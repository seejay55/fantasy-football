import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { AlertService } from '@shared/services/alert.service';
import { LeagueService } from '@services/league/league.service';
import { AuthService } from '@services/auth/auth.service';
import { UserService } from '@services/user/user.service';

import { User } from '@models/user';
import { League } from '@models/league';

@Component({
    selector: 'app-invite-to-league-page',
    templateUrl: './invite-to-league-page.component.html',
    styleUrls: ['./invite-to-league-page.component.css'],
    providers: [LeagueService, UserService]
})
export class InviteToLeaguePageComponent implements OnInit {

    currentUser: User;
    receiveUserId: number;
    leagues: League[] = [];

    constructor(
        private activatedRoute: ActivatedRoute,
        private leagueService: LeagueService,
        private alertService: AlertService,
        private authService: AuthService,
        private userService: UserService) { }

    ngOnInit() {
        this.activatedRoute.params.subscribe(
            (params: Params) => {
                this.receiveUserId = params['userId'];
                this.authService.getCurrentUser().subscribe(
                    (user) => { this.currentUser = user; }
                );
                this.getUserLeagues(this.currentUser._id);
            });
    }

    private getUserLeagues(userId: number): void {
        this.leagueService.getUserLeagues(this.currentUser._id).subscribe(
            // Successful Data
            (leagues) => {
              // For every league in array, create League Object
              leagues.forEach(league => {
                const temp = new League(
                  league.ID,
                  league.Name,
                  league.OwnerID,
                  league.OwnerUserName,
                  league.NumTeams,
                  league.Year,
                  league.MaxTeams,
                  league.TypeScoring,
                  league.LeaguePrivacy,
                  league.MaxTrades
                );
                this.leagues.push(temp); // Push current League Object to allLeagues array
              });
              this.filterLeagues(); // filter leagues based on owner
            },
            (err) => { this.alertService.danger('Error', 'Could not get leagues.', false); }
        );
    }

    private sendInvite(leagueId: number){
        let isIn = false;
        this.leagueService.getLeagueMembers(leagueId).subscribe(
            (members) => {
                members.forEach((member) => {
                    if (this.receiveUserId == member.UserID) {
                        isIn = true;
                    }
                })
                if (!isIn) {
                    this.userService.sendInvite(this.receiveUserId, this.currentUser._id, leagueId).subscribe(
                        (sent) => this.alertService.success('Success', 'User has been invited to league', false),
                        (err) => this.alertService.danger('Error', 'We fucked up', false)
                    );
                } else {
                    this.alertService.warning('Error', 'User is already in this league');
                }
            }
        );
    }

    private filterLeagues(): void {
        this.leagues = this.leagues.filter(
          league => league.ownerId === this.currentUser._id
        );
        // Set username for created leagues as current user
        this.leagues.forEach(league => league.ownerName = this.currentUser.userName);
      }
}
