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

  createLeague(name: string, userId: number, priv: boolean, pub: boolean, unlimited: boolean, other: number, maxTeams: number): boolean {
    // after computation
    name = 'NickLeague2';
    userId = 10;
    const privacy = 'Public';
    const maxTrades = 1;
    maxTeams = 11;
    /* this.leagueService.createLeague(name, userId, privacy, maxTrades, maxTeams).subscribe(
      success => this.alertService.success('Success', `League ${name} been created`, false),
      err => console.log(err)
    ); */
    return false;
  }

}
