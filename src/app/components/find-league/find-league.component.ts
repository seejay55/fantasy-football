import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-find-league',
  templateUrl: './find-league.component.html',
  styleUrls: ['./find-league.component.css']
})
export class FindLeagueComponent implements OnInit {
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
  
  constructor() { }

  ngOnInit() {
  }

  private searchListener(searchTerm: String) {
    console.log(searchTerm);
  }

  private joinListener(index: Number) {
    console.log(index);
  }
}
