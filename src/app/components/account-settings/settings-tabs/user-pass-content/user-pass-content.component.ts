import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../../models/user';

@Component({
  selector: 'app-user-pass-content',
  templateUrl: './user-pass-content.component.html',
  styleUrls: ['./user-pass-content.component.css']
})
export class UserPassContentComponent implements OnInit {

  @Input() user: User;

  constructor() { }

  ngOnInit() {
  }

  submitUsername(){
    
  }

  submitPassword(){

  }

}
