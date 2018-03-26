import { Component, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css']
})
export class NewsFeedComponent implements OnInit {

  @Input() feed;
  feedData;

  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get(`https://api.rss2json.com/v1/api.json?rss_url=${this.feed}&count=10`)
      .map(res => res.json())
      .subscribe(res => {
        this.feedData = res;
      });
  }

}
