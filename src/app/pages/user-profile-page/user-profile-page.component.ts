import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { User } from '../../models/user';
import { Invite } from '../../models/invite';

import { AuthService } from '../../services/auth/auth.service';
import { UserService } from '../../services/user/user.service';
import { BreadcrumbService } from 'angular-crumbs';
import { AlertService } from '../../shared/services/alert.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-user-profile-page',
  templateUrl: './user-profile-page.component.html',
  styleUrls: ['./user-profile-page.component.css'],
  providers: [UserService]
})
export class UserProfilePageComponent implements OnInit {

  currentUser: User;
  pageUser: User;

  isSame: Boolean = false;

  invites: Invite[] = [];

  createdLeagues;
  allLeagues = [
    {
      name: 'Super Cool League',
      ownerUserName: 'NGrey5',
      numMembers: Math.floor(Math.random() * 20)
    },
    {
      name: 'Not So Cool League',
      ownerUserName: 'Idiot',
      numMembers: Math.floor(Math.random() * 20)
    },
    {
      name: 'Football Tissue Paper',
      ownerUserName: 'test',
      numMembers: Math.floor(Math.random() * 20)
    },
    {
      name: 'Yeah',
      ownerUserName: 'NGrey5',
      numMembers: Math.floor(Math.random() * 20)
    },
    {
      name: 'Just naming names now',
      ownerUserName: 'test2',
      numMembers: Math.floor(Math.random() * 20)
    },
    {
      name: 'A Name and a Half',
      ownerUserName: 'Superman69',
      numMembers: Math.floor(Math.random() * 20)
    }
  ];

  constructor(
    public authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private location: Location,
    private breadcrumbService: BreadcrumbService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.authService.getCurrentUser()
      .subscribe(user => {
        this.currentUser = user;
      }
      );
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        const pageUserName = params['userName'];
        this.getPageUser(pageUserName);
      });
  }

  private getPageUser(userName: string): void {
    this.userService.getUserByUserName(userName).subscribe(
      (user) => {
        const temp = new User(user['0'].ID, '', user['0'].Username, user['0'].FirstName, user['0'].LastName);
        this.pageUser = temp;
        this.breadcrumbService.changeBreadcrumb(this.activatedRoute.snapshot, this.pageUser.userName);

        this.isSame = this.isSameUser();
        this.getUserInvites();
        this.filterLeagues();
      },
      (err) => {
        this.errorHandler(err);
      }
    );
  }

  private filterLeagues(): void {
    this.createdLeagues = this.allLeagues.filter(
      league => league.ownerUserName === this.pageUser.userName
    );
  }

  private isSameUser(): Boolean {
    if (this.pageUser.userName === this.currentUser.userName) {
      return true;
    } else {
      return false;
    }
  }

  private getUserInvites() {
    this.invites = [];
    if (this.isSame) {
      this.userService.getInvites(this.currentUser._id).subscribe(
        (invites) => {
          invites.forEach(invite => {
            const temp = new Invite(
              invite.SenderID,
              invite.SenderUsername,
              invite.SenderFirstName,
              invite.SenderLastName,
              invite.LeagueID,
              invite.LeagueName,
              invite.Date,
              invite.Age );
            this.invites.push(temp);
          });
         }
      );
    }
  }

  private errorHandler(err: HttpErrorResponse) {
    if (err.error) { this.alertService.danger(err.statusText, err.error, true); } else {
      this.alertService.danger(err.statusText, err.message, true);
    }
    this.location.back();
  }

}
