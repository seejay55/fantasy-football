import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-find-user',
  templateUrl: './find-user.component.html',
  styleUrls: ['./find-user.component.css']
})
export class FindUserComponent implements OnInit {

  //this is the results of the search pulled from SQL with a LIKE or whatever it is
  private searchResultsUsers = [
    'Greyhound',
    'Berger and Fries',
    'Brunch King',
    'SeeJay',
    'Kratox',
    'Ridley'
  ];

  constructor() { }

  ngOnInit() {
  }


  private searchListener(searchTerm: String) {
    console.log(searchTerm);
  }

}
