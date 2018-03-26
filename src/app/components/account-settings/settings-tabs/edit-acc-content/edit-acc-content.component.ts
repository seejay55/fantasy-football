import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../../models/user';

@Component({
  selector: 'app-edit-acc-content',
  templateUrl: './edit-acc-content.component.html',
  styleUrls: ['./edit-acc-content.component.css']
})
export class EditAccContentComponent implements OnInit {

  @Input() user: User;

  teams;

  constructor() { 
  }

  ngOnInit() {
    this.teams = ["Packers", "Also Packers", "Green Bay Packers", "The Packers"]
  }

  submitProfileInfo(){
    
  }

}
