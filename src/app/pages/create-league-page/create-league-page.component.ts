import { Component, OnInit } from '@angular/core';

import { League } from '@models/league';

import { LeagueService } from '@services/league/league.service';
import { AuthService } from '../../services/auth/auth.service';
import { AlertService } from '@shared/services/alert.service';

@Component({
    selector: 'app-create-league-page',
    templateUrl: './create-league-page.component.html',
    styleUrls: ['./create-league-page.component.css'],
    providers: [LeagueService, AuthService]
})
export class CreateLeaguePageComponent implements OnInit {

    constructor(private leagueService: LeagueService, private alertService: AlertService, private authService: AuthService) { }
    userID: number;

    ngOnInit() {
        this.authService.getCurrentUser()
            .subscribe(user => {
                this.userID = user._id;
            }
            );
    }

    createLeague(name: string, isPublic: boolean, unlimited: boolean, other: string, maxTeams: number, teamName: string): boolean {

        let maxTrades = 99;
        let privacy = 'Public';

        if (unlimited !== true) {
            maxTrades = Number(other);
        }

    }

    this.leagueService.createLeague(name, userId, privacy, maxTrades, maxTeams).subscribe(
      success => this.alertService.success('Success', `League ${name} has been created`, false),
      err => this.alertService.danger('Error', 'There was a problem creating the league.', false)
    );
    return false;
  }

}
