import { Component, OnInit } from '@angular/core';

import { League } from '@models/league';

import { AlertService } from '@shared/services/alert.service';
import { LeagueService } from '@services/league/league.service';

@Component({
  selector: 'app-find-league-page',
  templateUrl: './find-league-page.component.html',
  styleUrls: ['./find-league-page.component.css'],
  providers: [LeagueService]
})
export class FindLeaguePageComponent implements OnInit {

  searchResults: League[] = [];

  constructor(private leagueService: LeagueService, private alertService: AlertService) { }

  ngOnInit() {
  }

  private joinListener(index: Number) {
    console.log(index);
  }

  private search(term: string): void {
    this.searchResults = [];
    this.leagueService.getLeaguesBySearchTerm(term).subscribe(
      (results) => {
        results.forEach((league) => {
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
            league.MaxTrades,
            league.TeamName || ''
          );
          this.searchResults.push(temp);
        });
      },
      (err) => { this.alertService.warning('Error', 'There was a problem with your search. Please try again.', false); }
    );
  }

}
