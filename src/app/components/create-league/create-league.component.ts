import { Component, OnInit } from '@angular/core';

import { League } from '../../models/league';

import { LeagueService } from '../../services/league/league.service';
import { AlertService } from '../../shared/services/alert.service';

@Component({
  selector: 'app-create-league',
  templateUrl: './create-league.component.html',
  styleUrls: ['./create-league.component.css'],
  providers: [LeagueService]
})
export class CreateLeagueComponent implements OnInit {

  constructor(private leagueService: LeagueService, private alertService: AlertService) { }

  ngOnInit() {  }

  createLeague(name: string, userId: number, isPublic: boolean, unlimited: boolean, other: string, maxTeams: number): boolean {

    let maxTrades = 99;
    let privacy = 'Public';
    if (unlimited !== true) {
        maxTrades = Number(other);
    }
    if (!isPublic) {
      privacy = 'Private';
    }

    this.leagueService.createLeague(name, userId, privacy, maxTrades, maxTeams).subscribe(
      success => this.alertService.success('Success', `League ${name} been created`, false),
      err => console.log(err)
    );
    return false;
  }

}
