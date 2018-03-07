import { Component, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-feed-item',
  templateUrl: './feed-item.component.html',
  styleUrls: ['./feed-item.component.css']
})
export class FeedItemComponent implements OnInit {

  @Input() url: string;

  data;

  constructor(private http: Http) {

  }

  ngOnInit() {
    this.http.get(`https://api.rss2json.com/v1/api.json?rss_url=${this.url}&count=10`)
      .map(res => res.json())
      .subscribe(res => {
        this.data = res;
      });
  }

}
