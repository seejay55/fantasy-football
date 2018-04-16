import { Component, OnInit } from '@angular/core';

import { FeedService } from '@services/feed/feed.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  providers: [FeedService]
})
export class HomePageComponent implements OnInit {

  feeds;

  constructor(private feedService: FeedService) { }

  ngOnInit() {
    this.feeds = this.feedService.getUserFeeds();
  }

}
