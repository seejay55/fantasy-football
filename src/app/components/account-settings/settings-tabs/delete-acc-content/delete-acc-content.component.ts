import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../../../models/user';
import {UserService} from '../../../../services/user/user.service'

@Component({
  selector: 'app-delete-acc-content',
  templateUrl: './delete-acc-content.component.html',
  styleUrls: ['./delete-acc-content.component.css']
})
export class DeleteAccContentComponent implements OnInit {

  @Input() user: User;
  @Output() deleteUser = new EventEmitter<any>();

  bool : boolean;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.bool = false;
  }

  deleteClick(){
    this.bool = true;
  }

  private sendDeleteUser(): boolean {
    this.deleteUser.emit();
    console.log("ran sendDeleteUser()");
    return false;
  }



}
