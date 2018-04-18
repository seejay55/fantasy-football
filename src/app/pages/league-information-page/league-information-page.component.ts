import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { LeagueService } from '@services/league/league.service';
import { AlertService } from '@shared/services/alert.service';
<<<<<<< HEAD
import { AuthService } from '@services/auth/auth.service';

import { League } from '@models/league';
import { User } from '@models/user';
=======

import { League } from '@models/league';
>>>>>>> 93a494ebed719820f4bd8680eefc420d657eb5d0

@Component({
  selector: 'app-league-information-page',
  templateUrl: './league-information-page.component.html',
  styleUrls: ['./league-information-page.component.css'],
  providers: [LeagueService]
})
export class LeagueInformationPageComponent implements OnInit {

<<<<<<< HEAD
  private isInLeague: Boolean = false;
  private currentUser: User;

  private league: League;
  private members: any = [];
  private standings: any = [];
=======
  private league: League;
>>>>>>> 93a494ebed719820f4bd8680eefc420d657eb5d0

  constructor(
    private leagueService: LeagueService,
    private alertService: AlertService,
    private location: Location,
<<<<<<< HEAD
    private activatedRoute: ActivatedRoute,
    private authService: AuthService
=======
    private activatedRoute: ActivatedRoute
>>>>>>> 93a494ebed719820f4bd8680eefc420d657eb5d0
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        const leagueId = params['leagueId'];
<<<<<<< HEAD
        // console.log(`Getting League with ID: ${leagueId}`);
        this.setPageLeague(leagueId);
        this.setLeagueTeams(leagueId);
        this.setLeagueStandings(leagueId, 1);
      });
  }


=======
        console.log(`Getting League with ID: ${leagueId}`);
        this.setPageLeague(leagueId);
      });
  }

>>>>>>> 93a494ebed719820f4bd8680eefc420d657eb5d0
  private setPageLeague(leagueId: number): void {
    this.leagueService.getLeague(leagueId).subscribe(
      (league) => {
        league.forEach(data => {
          this.league = new League(
            data.ID,
            data.Name,
            data.OwnerID,
            data.OwnerUserName,
            data.NumTeams,
            data.Year,
            data.MaxTeams,
            data.TypeScoring,
            data.LeaguePrivacy,
            data.MaxTrades
          );
        });
<<<<<<< HEAD
        // console.log(this.league);
      },
      (err) => { this.alertService.danger('Error', 'League not found', true); this.location.back(); }
    );
  }

  private setLeagueTeams(leagueId: number): void {
    this.members = [];
    this.leagueService.getLeagueMembers(leagueId).subscribe(
      (members) => {
        members.forEach(member => {
          this.members.push(member);
        });
        // console.log(this.members);
        this.isInLeague = this.checkIfInLeague();
        console.log(this.isInLeague);
      },
      (err) => { this.alertService.danger('Error', 'Could not get teams', false); }
    );
  }

  private setLeagueStandings(leagueId: number, week: number): void {
    this.standings = [];
    this.leagueService.getLeagueLeagueScoresByWeek(leagueId, week).subscribe(
      (standings) => {
        standings.forEach(standing => {
          this.standings.push(standing);
        });
        // console.log(standings);
        this.standings = this.standings.filter(
          standing => standing.score >= standing.score
        );
      },
      (err) => { this.alertService.danger('Error', 'Could not get league standings', false); }
    );
  }

  private checkIfInLeague(): boolean {
    this.authService.getCurrentUser().subscribe(
      (user) => {
        this.currentUser = user;
        this.members.forEach((member) => {
          if (this.currentUser._id === this.members.ID) { return true; }
        });
      },
      (err) => this.alertService.danger('Error', 'Could not get user', false)
    );
    return false;
=======
        console.log(this.league); }
        ,
      (err) => {this.alertService.danger('Error', 'League not found', true); this.location.back(); }
    );
>>>>>>> 93a494ebed719820f4bd8680eefc420d657eb5d0
  }

}
