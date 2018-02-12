import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-acc-content',
  templateUrl: './edit-acc-content.component.html',
  styleUrls: ['./edit-acc-content.component.css']
})
export class EditAccContentComponent implements OnInit {

  teams;

  constructor() { 
  }

  ngOnInit() {
    this.teams = ["Packers", "Also Packers", "Green Bay Packers", "The Packers"]
  }

}
