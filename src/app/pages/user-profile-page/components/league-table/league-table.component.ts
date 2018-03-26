import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-league-table',
  templateUrl: './league-table.component.html',
  styleUrls: ['./league-table.component.css']
})
export class LeagueTableComponent implements OnInit {

  @Input() tableHeader;
  @Input() leagues;

  constructor() { }

  ngOnInit() {
  }

}
