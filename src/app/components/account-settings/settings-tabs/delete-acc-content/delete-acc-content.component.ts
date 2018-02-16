import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-acc-content',
  templateUrl: './delete-acc-content.component.html',
  styleUrls: ['./delete-acc-content.component.css']
})
export class DeleteAccContentComponent implements OnInit {

  bool : boolean;

  constructor() { }

  ngOnInit() {
    this.bool = false;
  }

  deleteClick(){
    this.bool = true;
  }


}
