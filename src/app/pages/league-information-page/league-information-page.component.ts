import { Subject } from 'rxjs/bundles/Rx';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Location } from '@angular/common';

import { LeagueService } from '@services/league/league.service';
import { AlertService } from '@shared/services/alert.service';
import { AuthService } from '@services/auth/auth.service';

import { League } from '@models/league';
import { User } from '@models/user';

@Component({
  selector: 'app-league-information-page',
  templateUrl: './league-information-page.component.html',
  styleUrls: ['./league-information-page.component.css'],
  providers: [LeagueService]
})
export class LeagueInformationPageComponent implements OnInit {

  private isInLeague: Boolean = false;
  private isComissioner: Boolean = false;
  private currentUser: User;

  private league: League;
  private members: any = [];
  private standings: any = [];
  private requests: any = [];

  constructor(
    private leagueService: LeagueService,
    private alertService: AlertService,
    private location: Location,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        const leagueId = params['leagueId'];
        // console.log(`Getting League with ID: ${leagueId}`);
        this.setCurrentUser();
        this.setPageLeague(leagueId);
        this.setLeagueTeams(leagueId);
        this.setLeagueStandings(leagueId, 1);
        this.setLeagueRequests(leagueId);
      });
  }


  private setPageLeague(leagueId: number): void {
    this.leagueService.getLeague(leagueId).subscribe(
      (league) => {
        league.forEach(data => {
          this.league = new League(
            data.ID,
            data.Name,
            data.OwnerID,
            data.OwnerUserName,
            data.NumTeams,
            data.Year,
            data.MaxTeams,
            data.TypeScoring,
            data.LeaguePrivacy,
            data.MaxTrades
          );
        });
        // console.log(this.league);
        this.setIsComissioner();
      },
      (err) => { this.alertService.danger('Error', 'League not found', true); this.location.back(); }
    );
  }

  private setLeagueTeams(leagueId: number): void {
    this.members = [];
    this.leagueService.getLeagueMembers(leagueId).subscribe(
      (members) => {
        members.forEach(member => {
          this.members.push(member);
        });
        // console.log(this.members);
        this.setIfInLeague();
      },
      (err) => { this.alertService.danger('Error', 'Could not get teams', false); }
    );
  }

  private setLeagueStandings(leagueId: number, week: number): void {
    this.standings = [];
    this.leagueService.getLeagueLeagueScoresByWeek(leagueId, week).subscribe(
      (standings) => {
        standings.forEach(standing => {
          this.standings.push(standing);
        });
        // console.log(standings);
        this.standings = this.standings.filter(
          standing => standing.score >= standing.score
        );
      },
      (err) => { this.alertService.danger('Error', 'Could not get league standings', false); }
    );
  }

  private setLeagueRequests(leagueId: number): void {
    this.leagueService.getLeagueRequests(leagueId).subscribe(
      (requests) => {
        requests.forEach(request => {
          this.requests.push(request);
        });
      },
      (err) => this.alertService.danger('Error', 'Could not get requests', false)
    );
  }

  private setCurrentUser(): void {
    this.authService.getCurrentUser().subscribe(
      user => this.currentUser = user,
      err => this.alertService.danger('Error', 'Could not get user', false)
    );
  }

  private setIfInLeague(): void {
    this.members.forEach((member) => {
      if (this.currentUser._id === member.UserID) { this.isInLeague = true; }
    });
  }
   private setIsComissioner(): void {
     if (this.league.ownerId === this.currentUser._id) { this.isComissioner = true; }
   }

   private deleteLeague(): void {
     this.leagueService.deleteLeague(this.league._id).subscribe(
       (deleted) => {
         this.alertService.success('Deleted', `${this.league.name} has been deleted`, true);
         this.router.navigateByUrl(`user/${this.currentUser.userName}`);
        },
       (err) => this.alertService.danger('Error', 'There was an error deleting the league')
     );
   }

   private joinLeague(teamName: string): void {
    this.leagueService.joinLeague(this.currentUser._id, this.league._id, teamName).subscribe(
      (sent) => this.alertService.success('Success', `You have joined ${this.league.name} with team: ${teamName}`, false),
      (err) => this.alertService.danger('Error', 'Could not join league', false)
     );
   }

   private requestToJoin(teamName: string): void {
     this.leagueService.requestToJoinLeague(this.currentUser._id, this.league._id, teamName).subscribe(
      (sent) => this.alertService.success('Success', `You have requested to join ${this.league.name} with team: ${teamName}`, false),
      (err) => this.alertService.danger('Error', 'Could not request to join', false)
     );
   }

   private acceptRequest(senderId: number, userName: string, teamName: string): void {
     this.leagueService.acceptLeagueRequest(senderId, this.league._id, teamName).subscribe(
      (accepted) => {
        this.alertService.success('Success', `${userName} has been added to ${this.league.name}`);
        this.updateRequests(senderId);
      },
      (err) => this.alertService.danger('Error', `Could not add user ${userName}`)
     );
   }

   private removeRequest(senderId: number, userName: string): void {
     this.leagueService.declineRequest(senderId, this.league._id).subscribe(
      (declined) => {
        this.alertService.success('Boom', `You have declined ${userName}'s request.`, false);
        this.updateRequests(senderId);
    },
      (err) => this.alertService.danger('Error', `Could not decline ${userName}'s request.`, false)
     );
   }

   private updateRequests(senderId: number): void {
    this.requests = this.requests.filter(
        request => request.SenderID !== senderId
    );
}

}
