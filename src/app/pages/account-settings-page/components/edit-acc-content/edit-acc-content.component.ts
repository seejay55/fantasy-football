import { Component, OnInit, Input } from '@angular/core';
import { User } from '@models/user';

import { NFLTEAMS } from '../../../../../assets/NFLTeams';

@Component({
  selector: 'app-edit-acc-content',
  templateUrl: './edit-acc-content.component.html',
  styleUrls: ['./edit-acc-content.component.css']
})
export class EditAccContentComponent implements OnInit {

  @Input() user: User;

  teams = NFLTEAMS;

  constructor() {
  }

  ngOnInit() {
  }

  private updateUser(): void {

  }

}