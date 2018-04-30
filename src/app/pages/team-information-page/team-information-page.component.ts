import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { User } from '@models/user';
import { League } from '@models/league';
import { LeagueService } from '@services/league/league.service';

import { AuthService } from '@services/auth/auth.service';

@Component({
  selector: 'app-team-information-page',
  templateUrl: './team-information-page.component.html',
  styleUrls: ['./team-information-page.component.css'],
  providers: [LeagueService]
})
export class TeamInformationPageComponent implements OnInit {

  currentUser: User;
  league: League;
  wins: number;
  losses: number;

  qb: any[] = [];
  rb: any[] = [];
  wr: any[] = [];
  te: any[] = [];
  flex: any[] = [];
  def: any[] = [];
  k: any[] = [];
  bench: any[] = [];

  constructor(private leagueService: LeagueService, private activatedRoute: ActivatedRoute, public authService: AuthService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        const pageLeagueID = params['_id'];
        this.authService.getCurrentUser().subscribe(
          user => {
            this.currentUser = user;
            this.setUsersLeague(pageLeagueID);
          }
        );
      });

  }

  private setUsersLeague(pageLeagueID: number) {
    this.leagueService.getUserLeagues(this.currentUser._id).subscribe(
      (leagues) => {
        // For every league in array, create League Object
        leagues.forEach(league => {
          if (Number(league.ID) === Number(pageLeagueID)) {
            this.league = new League(
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
              league.TeamName || 'No Team Name Assigned'
            );
          }
        }
        );
        this.leagueService.getLeagueRecordByUserId(pageLeagueID, this.currentUser._id).subscribe(
          (records) => {
            records.forEach(record => {
              this.wins = record.wins;
              this.losses = record.losses;
            });
          }
        );

        this.leagueService.getLeagueRosterByUserId(pageLeagueID, this.currentUser._id).subscribe(
          (roster) => {
            roster.forEach(data => {
              if (data.Active === 1) {
                if (data.PlayerPos === 'QB') {
                  this.qb.push(data);
                } else if (data.PlayerPos === 'RB' && this.rb.length < 2) {
                  this.rb.push(data);
                } else if (data.PlayerPos === 'WR' && this.wr.length < 2) {
                  this.wr.push(data);
                } else if (data.PlayerPos === 'TE' && this.te.length < 1) {
                  this.te.push(data);
                } else if (data.PlayerPos === 'RB' || data.PlayerPos === 'WR' || data.PlayerPos === 'TE') {
                  this.flex.push(data);
                } else if (data.PlayerPos === 'DEF') {
                  this.def.push(data);
                } else if (data.PlayerPos === 'K') {
                  this.k.push(data);
                }
              } else {
                this.bench.push(data);
              }
            });
          }
        );

      });



  }
}
