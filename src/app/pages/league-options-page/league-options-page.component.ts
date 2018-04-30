import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router, Params } from '@angular/router';

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
  league: League;
  selectedLeague: League;

  isPublic: Boolean;
  isUnlimited: Boolean;

  constructor(
    public authService: AuthService,
    private userService: UserService,
    private leagueService: LeagueService,
    private alertService: AlertService,
    private location: Location,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        const leagueId = params['leagueId'];
        console.log('In', leagueId);
        this.authService.getCurrentUser()
          .subscribe(user => {
            this.currentUser = user;
            this.setLeague(leagueId); // get the leagues for the page user
          }
          );
      });
  }

  // Set pageUser leagues if any
  private setLeague(id: number): void {
    // Get all leagues that user is in from database
    this.leagueService.getLeague(id).subscribe(
      // Successful Data
      (league) => {
        // For every league in array, create League Object
        league.forEach(data => {
          const temp = new League(
            data.ID,
            data.Name,
            data.OwnerID,
            data.OwnerUserName || 'Placeholder Owner',
            data.NumTeams || 99,
            data.Year,
            data.MaxTeams,
            data.TypeScoring || 'N/A',
            data.LeaguePrivacy || 'N/A',
            data.MaxTrades,
            data.TeamName
          );
          this.league = temp; // Push current League Object to allLeagues array
        });
        // this.filterLeagues(); // filter leagues based on owner
      },
      // Unsuccessful Data
      (err) => { this.errorHandler(err); } // handle error
    );
  }

  updateLeague(name: string, isPublic: boolean, unlimited: boolean, other: string, maxTeams: number, year: number): boolean {
    this.selectedLeague = this.league;
    if (this.currentUser != null && this.selectedLeague != null) {
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
    } else {
      this.alertService.danger('Error', 'You must be signed in to edit a league.', false)
    }
    return false;
  }

  // Handle any and all errors
  private errorHandler(err: HttpErrorResponse) {
    if (err.error) { this.alertService.danger(err.statusText, err.error, true); } else {
      this.alertService.danger(err.statusText, err.message, true);
    }
    console.log('In');
    this.location.back();
  }

}
