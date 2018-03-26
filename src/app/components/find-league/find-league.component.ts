import { Component, OnInit } from '@angular/core';

import { LeagueService } from '../../services/league/league.service';

import { League } from '../../models/league';

@Component({
  selector: 'app-find-league',
  templateUrl: './find-league.component.html',
  styleUrls: ['./find-league.component.css'],
  providers: [LeagueService]
})
export class FindLeagueComponent implements OnInit {

  searchResults: League[] = [];

  private leagues = [{
    'Name' : 'test',
    'Players' : '8',
    'MaxPlayers' : '12'
  },
  {
    'Name' : 'test2',
    'Players' : '8',
    'MaxPlayers' : '10'
  }];

  constructor(private leagueService: LeagueService) { }

  ngOnInit() {
  }

  private joinListener(index: Number) {
    console.log(index);
  }

  private search(term: string): void {
    this.leagueService.getLeaguesBySearchTerm(term).subscribe(
      (results) => { this.searchResults = results; console.log(this.searchResults); },
      (err) => { console.log(err.error); }
    );
  }
}
