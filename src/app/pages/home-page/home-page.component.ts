import { Component, OnInit } from '@angular/core';

import { User } from '@models/user';
import { League } from '@models/league';

import { FeedService } from '@services/feed/feed.service';
import { AuthService } from '@services/auth/auth.service';
import { LeagueService } from '@services/league/league.service';

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  providers: [FeedService, LeagueService]
})
export class HomePageComponent implements OnInit {

  currentUser: User;
  feeds;
  allLeaguesIn: League[] = [];

  constructor(
    private feedService: FeedService,
    public authService: AuthService,
    private leagueService: LeagueService
  ) { }

  ngOnInit() {
    this.feeds = this.feedService.getUserFeeds();
    this.authService.getCurrentUser()
      .subscribe(user => {
        if (user != null) {
          this.currentUser = user;
          this.getAllTeams(this.currentUser._id);
        }
      }
      );
  }

  private getAllTeams(userId: number) {
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
              this.allLeaguesIn.push(temp); // Push current League Object to allLeagues array
            });
        }
    );

    }

}
