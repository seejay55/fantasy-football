import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';

import { User } from '@models/user';
import { League } from '@models/league';
import { LeagueService } from '@services/league/league.service';

import { AuthService } from '@services/auth/auth.service';

@Component({
  selector: 'app-user-teams',
  templateUrl: './user-teams.component.html',
  styleUrls: ['./user-teams.component.css'],
  providers: [LeagueService]
})
export class UserTeamsComponent implements OnInit {

    currentUser: User;

    allTeams: League[] = [];

  constructor(
    public authService: AuthService,
    private leagueService: LeagueService
  ) { }

  ngOnInit() {
    this.authService.getCurrentUser()
    .subscribe(user => {
        if(user != null){
            this.currentUser = user;
            this.getAllTeams(this.currentUser._id);
        }
    }
  );

  }

  private getAllTeams(userId: number){
    this.leagueService.getUserLeagues(userId).subscribe(
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
              this.allTeams.push(temp); // Push current League Object to allLeagues array
            });
        }
    );

    }
}
