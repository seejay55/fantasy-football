import { Component, OnInit, Input } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';

import { League } from '@models/league';

@Component({
  selector: 'app-user-teams',
  templateUrl: './user-teams.component.html',
  styleUrls: ['./user-teams.component.css'],
  providers: []
})
export class UserTeamsComponent implements OnInit {

  @Input() league: League;

  constructor( ) { }

  ngOnInit() { }
}
