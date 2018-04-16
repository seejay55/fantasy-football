import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { LeagueService } from '@services/league/league.service';
import { AlertService } from '@shared/services/alert.service';

import { League } from '@models/league';

@Component({
  selector: 'app-league-information-page',
  templateUrl: './league-information-page.component.html',
  styleUrls: ['./league-information-page.component.css'],
  providers: [LeagueService]
})
export class LeagueInformationPageComponent implements OnInit {

  private league: League;
  private members: any = [];

  constructor(
    private leagueService: LeagueService,
    private alertService: AlertService,
    private location: Location,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        const leagueId = params['leagueId'];
        console.log(`Getting League with ID: ${leagueId}`);
        this.setPageLeague(leagueId);
        this.setLeagueTeams(leagueId);
      });
  }

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
        console.log(this.league); },
      (err) => {this.alertService.danger('Error', 'League not found', true); this.location.back(); }
    );
  }

  private setLeagueTeams(leagueId: number): void {
    this.leagueService.getLeagueMembers(leagueId).subscribe(
      (members) => {
        members.forEach(member => {
          this.members.push(member);
        });
        console.log(this.members);
      },
      (err) => {this.alertService.danger('Error', 'Could not get teams', false); }
    );
  }

}
