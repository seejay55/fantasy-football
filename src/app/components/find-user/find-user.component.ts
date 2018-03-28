
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-find-user',
  templateUrl: './find-user.component.html',
  styleUrls: ['./find-user.component.css']
})
export class FindUserComponent implements OnInit {

  // this is the results of the search pulled from SQL with a LIKE or whatever it is
  private searchResultsUsers = [
    'Greyhound',
    'Berger and Fries',
    'Brunch King',
    'SeeJay',
    'Kratox',
    'Ridley'
  ];

  private availableLeagues = [
    {'leagueID': 88100, 'leagueName': 'Memes', 'openSpots': true, 'ownedByMe': true},
    {'leagueID': 88101, 'leagueName': 'Dreams', 'openSpots': true, 'ownedByMe': true},
    {'leagueID': 88102, 'leagueName': 'Sportsball', 'openSpots': true, 'ownedByMe': true}
  ];

  constructor() { }

  ngOnInit() {
  }


  private searchListener(searchTerm: String) {
    console.log(searchTerm);
  }

  private sendListener() {
    console.log('invite sent');
  }

}
