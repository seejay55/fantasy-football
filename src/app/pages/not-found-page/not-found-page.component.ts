import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.css']
})
export class NotFoundPageComponent implements OnInit {

  insults = [
    {
      header: 'Wow.',
      lead: 'Did you seriously just break this entire website?',
      small: 'How does that even happen?',
      button: 'Yes. I know I suck.'
    },
    {
      header: 'Okay, seriously?',
      lead: `Would you please stop messing around where you shouldn't be?`,
      small: 'You obviously have some major obedience issues...',
      button: 'Get out of here.'
    },
    {
      header: 'Congrats.',
      lead: `You managed to, once again, to screw up this entire website.`,
      small: `We're getting really sick of you...`,
      button: `I'm getting sick of me too.`
    },
    {
      header: 'Sometimes, people never surprise you.',
      lead: `Yeah, we're talking about you.`,
      small: `Yes, you. With the weird face.`,
      button: `Me?`
    },
    {
      header: 'Really?',
      lead: `You see that button? Click it.`,
      small: `(Hint: it's the one right below this.)`,
      button: `Yes, this one.`
    },
    {
      header: 'Oh. You again...',
      lead: `Might as well just make this the homepage.`,
      small: `We all, quite literally, hate every fiber of your being.`,
      button: `Me too.`
    }
  ];

  displayingInsult: any;

  constructor() {
    this.displayingInsult = this.insults[Math.floor(Math.random() * this.insults.length)];
  }

  ngOnInit() {
  }

}
