import { Component, OnInit } from '@angular/core';
import FeedParser from 'feedparser';
import 'rxjs/add/operator/map';
 
//import { request } from 'http';
//let feedParser = require('feedparser');
//var request = require('request'); // for fetching the feed

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  backgroundPicture = '';

  constructor() { 
  }

  ngOnInit() {
 
  }

  rodgerTime() {
    console.log('rodger time!');
    this.backgroundPicture = 'http://media.bizj.us/view/img/7247332/100715aaron-rodgersprevea-2015*1200xx4396-2473-0-227.jpg';
  }

  //this.fp = new FeedParser([]);
  //let req = http.get('http://www.espn.com/espn/rss/nfl/news');

  
  /*req.on('error', function (error) {
    // handle any request errors
  });
   
  req.on('response', function (res) {
    var stream = this; // `this` is `req`, which is a stream
   
    if (res.statusCode !== 200) {
      this.emit('error', new Error('Bad status code'));
    }
    else {
      stream.pipe(fp);
    }
  });

  fp.on('readable', function () {
    // This is where the action is!
    var stream = this; // `this` is `feedparser`, which is a stream
    var meta = this.meta; // **NOTE** the "meta" is always available in the context of the feedparser instance
    var item;
   
    while (item = stream.read()) {
      console.log(item);
    }
  });*/

}
