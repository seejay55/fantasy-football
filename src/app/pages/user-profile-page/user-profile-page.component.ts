import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { User } from '../../models/user';
import { League } from '../../models/league';
import { Invite } from '../../models/invite';

import { AuthService } from '../../services/auth/auth.service';
import { UserService } from '../../services/user/user.service';
import { LeagueService } from '../../services/league/league.service';
import { BreadcrumbService } from 'angular-crumbs';
import { AlertService } from '../../shared/services/alert.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-user-profile-page',
  templateUrl: './user-profile-page.component.html',
  styleUrls: ['./user-profile-page.component.css'],
  providers: [UserService, LeagueService]
})
export class UserProfilePageComponent implements OnInit {

  currentUser: User;
  pageUser: User;

  isSame: Boolean = false;

  invites: Invite[] = [];

  createdLeagues: League[] = [];
  allLeagues: League[] = [];

  constructor(
    public authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private location: Location,
    private breadcrumbService: BreadcrumbService,
    private alertService: AlertService,
    private leagueService: LeagueService
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
      this.setPageUser(pageUserName);
    });

    // this.userService.updateUser(5, 'test5', 'test5', null).subscribe(user => console.log(user) );
    // this.userService.updateUser(14, 'createdUser2', 'createdUser2', 'createdUser2', null).subscribe();
  }

  // Set pageUser
  private setPageUser(userName: string): void {
    // Get User from database by username
    this.userService.getUserByUserName(userName).subscribe(
      // Successful Data
      (user) => {
        user = user['0']; // set user = first item in array
        const temp = new User(user.ID, '', user.Username, user.FirstName, user.LastName); // create user object off properties from database
        this.pageUser = temp; // set the page user
        this.breadcrumbService.changeBreadcrumb(this.activatedRoute.snapshot, this.pageUser.userName); // change breadcrumb to be page user

        this.isSame = this.isSameUser(); // check if pageUser is the same as currentUser and return true or false
        this.setUserLeagues(); // get the leagues for the page user
        this.setUserInvites(); // get the invites for the current user (if current user is same as page user)
      },
      // Unsuccessful Data
      (err) => { this.errorHandler(err); } // handle the error
    );
  }

  // Check if pageUser === currentUser
  private isSameUser(): Boolean {
    if (this.pageUser.userName === this.currentUser.userName) {
      return true;
    } else {
      return false;
    }
  }

  // Set pageUser leagues if any
  private setUserLeagues(): void {
    this.allLeagues = []; // Clear all leagues for the page
    // Get all leagues that user is in from database
    this.leagueService.getUserLeagues(this.pageUser._id).subscribe(
      // Successful Data
      (leagues) => {
        // For every league in array, create League Object
        leagues.forEach(league => {
          const temp = new League(
            league.ID,
            league.Name,
            league.OwnerID,
            league.OwnerUserName || 'Placeholder Owner',
            league.NumTeams || 99,
            league.Year,
            league.MaxTeams,
            league.TypeScoring || 'N/A',
            league.LeaguePrivacy || 'N/A',
            league.MaxTrades,
            league.TeamName
          );
          this.allLeagues.push(temp); // Push current League Object to allLeagues array
        });
        this.filterLeagues(); // filter leagues based on owner
      },
      // Unsuccessful Data
      (err) => { this.errorHandler(err); } // handle error
    );
  }

  // Filter leagues based on owner
  private filterLeagues(): void {
    this.createdLeagues = this.allLeagues.filter(
      league => league.ownerId === this.pageUser._id
    );
    // Set username for created leagues as current user
    this.createdLeagues.forEach(league => league.ownerName = this.currentUser.userName);
  }

  // Set user invites if pageUser === currentUser
  private setUserInvites(): void {
    if (this.isSame) {
      this.invites = [];
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
              invite.Age);
            this.invites.push(temp);
          });
        }
      );
    }
  }

  // Handle any and all errors
  private errorHandler(err: HttpErrorResponse) {
    if (err.error) { this.alertService.danger(err.statusText, err.error, true); } else {
      this.alertService.danger(err.statusText, err.message, true);
    }
    this.location.back();
  }

}
