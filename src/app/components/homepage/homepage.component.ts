import { Component, OnInit } from '@angular/core';
import { FeedService } from '../../services/feed/feed.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: [FeedService]
})
export class HomepageComponent implements OnInit {

  feeds;

  constructor(private feedService: FeedService) { }

  ngOnInit() {
    this.feeds = this.feedService.getUserFeeds();
  }

}
