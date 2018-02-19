import { Component, OnInit } from '@angular/core';
import {FeedService } from '../../../services/feed/feed.service';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css'],
  providers: [FeedService]
})
export class NewsFeedComponent implements OnInit {

  feeds;

  constructor(private feedService: FeedService) {
    this.feeds = feedService.getUserFeeds();
  }

  ngOnInit() {
  }

}
