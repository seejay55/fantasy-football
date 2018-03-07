import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { User } from '../../models/user';

import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-user-profile-page',
  templateUrl: './user-profile-page.component.html',
  styleUrls: ['./user-profile-page.component.css']
})
export class UserProfilePageComponent implements OnInit, OnDestroy {

  user: User;
  userSubscription: any;
  userName: string;

  sameAs: Boolean = false;

  leaguesCreated;
  leagues = [
    {
      name: 'Super Cool League',
      ownerUserName: 'NGrey',
      numMembers: Math.floor(Math.random() * 20)
    },
    {
      name: 'Not So Cool League',
      ownerUserName: 'Idiot',
      numMembers: Math.floor(Math.random() * 20)
    },
    {
      name: 'Football Tissue Paper',
      ownerUserName: 'ButtCrack',
      numMembers: Math.floor(Math.random() * 20)
    },
    {
      name: 'Yeah',
      ownerUserName: 'NGrey',
      numMembers: Math.floor(Math.random() * 20)
    },
    {
      name: 'Just naming names now',
      ownerUserName: 'Butt Sucker',
      numMembers: Math.floor(Math.random() * 20)
    },
    {
      name: 'A Name and a Half',
      ownerUserName: 'Superman69',
      numMembers: Math.floor(Math.random() * 20)
    }
  ];

  constructor(public authService: AuthService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.userSubscription = this.authService.getCurrentUser()
      .subscribe( user => {
          this.user = user;
        }
      );
      this.activatedRoute.params.subscribe(
        (params: Params) => {
          this.userName = params['userName'];
          if (this.userName === this.user.userName) {
            this.sameAs = true; } else {
            this.sameAs = false;
          }
          this.leaguesCreated = this.leagues.filter(
            league => league.ownerUserName === this.userName
          );
        });
  }

  ngOnDestroy() { this.userSubscription.unsubscribe(); }

}
