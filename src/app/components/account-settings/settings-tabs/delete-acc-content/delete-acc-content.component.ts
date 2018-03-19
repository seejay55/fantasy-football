import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../../models/user';
import {UserService} from '../../../../services/user/user.service'

@Component({
  selector: 'app-delete-acc-content',
  templateUrl: './delete-acc-content.component.html',
  styleUrls: ['./delete-acc-content.component.css']
})
export class DeleteAccContentComponent implements OnInit {

  @Input() user: User;

  bool : boolean;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.bool = false;
  }

  deleteClick(){
    this.bool = true;
    //this.userService.deleteUser(this.user._id);
    
  }


}
