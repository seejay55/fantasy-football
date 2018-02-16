import { Injectable } from '@angular/core';

@Injectable()
export class FeedService {

  private feeds = [
    "http://www.espn.com/espn/rss/nfl/news"
  ]
  
  constructor() { }

  getUserFeeds() {
    return this.feeds;
  }

}
