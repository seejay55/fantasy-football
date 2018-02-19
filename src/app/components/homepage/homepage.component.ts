import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  backgroundPicture = '';

  constructor() { }

  ngOnInit() { }

  rodgerTime() {
    console.log('Rodger time!');
    this.backgroundPicture = 'http://media.bizj.us/view/img/7247332/100715aaron-rodgersprevea-2015*1200xx4396-2473-0-227.jpg';
  }

}
