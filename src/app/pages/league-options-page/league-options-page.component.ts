import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';

import { User } from '../../models/user';
import { League } from '../../models/league';

import { AuthService } from '../../services/auth/auth.service';
import { UserService } from '../../services/user/user.service';
import { LeagueService } from '../../services/league/league.service';
import { AlertService } from '../../shared/services/alert.service';

@Component({
    selector: 'app-league-options-page',
    templateUrl: './league-options-page.component.html',
    styleUrls: ['./league-options-page.component.css'],
    providers: [UserService, LeagueService]
})
export class LeagueOptionsPageComponent implements OnInit {
    currentUser: User;
    createdLeagues: League[] = [];
    allLeagues: League[] = [];
    selectedLeague: League;

    isPublic: Boolean;
    isUnlimited: Boolean;

    constructor(
        public authService: AuthService,
        private userService: UserService,
        private leagueService: LeagueService,
        private alertService: AlertService,
        private location: Location
    ) { }

    ngOnInit() {
        this.authService.getCurrentUser()
            .subscribe(user => {
                this.currentUser = user;
            }
            );
        this.setUserLeagues(); // get the leagues for the page user
    }

    private updateForms(id: number): void {
        this.createdLeagues.forEach( league =>
            {
                if (id == league._id)
                {
                    this.selectedLeague = league;
                }
            }
        );
        this.isUnlimited = (this.selectedLeague.maxTrades == 99);
        this.isPublic = (this.selectedLeague.leaguePrivacy == "Public");
    }

    // Filter leagues based on owner
    private filterLeagues(): void {
        this.createdLeagues = this.allLeagues.filter(
            league => league.ownerId === this.currentUser._id
        );
        // Set username for created leagues as current user
        this.createdLeagues.forEach(league => league.ownerName = this.currentUser.userName);
    }

    // Set pageUser leagues if any
    private setUserLeagues(): void {
        this.allLeagues = []; // Clear all leagues for the page
        // Get all leagues that user is in from database
        this.leagueService.getUserLeagues(this.currentUser._id).subscribe(
            // Successful Data
            (leagues) => {
                // For every league in array, create League Object
                leagues.forEach(league => {
                    const temp = new League(
                        league.ID,
                        league.Name,
                        league.OwnerID,
                        league.OwnerUserName || 'Placeholder Owner',
                        league.NumTeams || 99,
                        league.Year,
                        league.MaxTeams,
                        league.TypeScoring || 'N/A',
                        league.LeaguePrivacy || 'N/A',
                        league.MaxTrades,
                        league.TeamName
                    );
                    this.allLeagues.push(temp); // Push current League Object to allLeagues array
                });
                this.filterLeagues(); // filter leagues based on owner
            },
            // Unsuccessful Data
            (err) => { this.errorHandler(err); } // handle error
        );
    }

    updateLeague(name: string, isPublic: boolean, unlimited: boolean, other: string, maxTeams: number, year: number): boolean {
        if(this.currentUser != null && this.selectedLeague != null)
        {
            let maxTrades = 99;
            let privacy = 'Public';

            if (unlimited !== true) {
                maxTrades = Number(other);
            }

            if (!isPublic) {
                privacy = 'Private';
            }
            this.leagueService.updateLeague(this.selectedLeague._id, year, name, maxTeams, "Default", privacy, maxTrades).subscribe(
                success => this.alertService.success('Success', `League ${name} has been edited`, false),
                err => this.alertService.danger('Error', 'There was a problem editing the league.', false)
            );
        } else
        {
            this.alertService.danger('Error', 'You must be signed in to edit a league.', false)
        }
        return false;
    }

    // Handle any and all errors
    private errorHandler(err: HttpErrorResponse) {
        if (err.error) { this.alertService.danger(err.statusText, err.error, true); } else {
            this.alertService.danger(err.statusText, err.message, true);
        }
        this.location.back();
    }

}
