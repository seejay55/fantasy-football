import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { League } from '../../models/league';

@Injectable()
export class LeagueService {

  endpoint = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  // Multiple Leagues
  public getAllLeagues() {
    return this.http.get<any[]>(`${this.endpoint}/leagues`);
  }

  public getLeaguesBySearchTerm(term: string) {
    return this.http.get<any[]>(`${this.endpoint}/leagues/search/?query=${term}`);
  }

  // Specific League
  public getLeague(leagueId: number) {
    return this.http.get<any>(`${this.endpoint}/league/${leagueId}`);
  }

  public getLeagueMembers(leagueId: number) {
    return this.http.get<any[]>(`${this.endpoint}/league/${leagueId}/members`);
  }

  public getLeagueRosters(leagueId: number) {
    return this.http.get<any[]>(`${this.endpoint}/league/${leagueId}/rosters`);
  }

  public getLeagueRosterByUserId(leagueId: number, userId: number) {
    return this.http.get<any[]>(`${this.endpoint}/league/${leagueId}/roster/${userId}`);
  }

  public getLeagueScheduleByWeek(leagueId: number, week: number) {
    return this.http.get<any[]>(`${this.endpoint}/league/${leagueId}/schedule?week=${week}`);
  }

  public getLeagueRecordByUserId(leagueId: number, userId: number) {
    return this.http.get<any[]>(`${this.endpoint}/league/${leagueId}/record/${userId}`);
  }

  public getLeagueLeagueScoresByWeekAndUser(leagueId: number, userId: number, week: number) {
    return this.http.get<any[]>(`${this.endpoint}/league/${leagueId}/scores?week=${week}&user=${userId}`);
  }

  public getLeagueLeagueScoresByWeek(leagueId: number, week: number) {
    return this.http.get<any[]>(`${this.endpoint}/league/${leagueId}/scores?week=${week}`);
  }

  public getLeagueLeagueScoresByUser(leagueId: number, userId: number) {
    return this.http.get<any[]>(`${this.endpoint}/league/${leagueId}/scores?userId=${userId}`);
  }

  // For Specific User
  public getUserLeagues(userId: number) {
    return this.http.get<any[]>(`${this.endpoint}/user/${userId}/leagues`);
  }

  public createLeague(leagueName: string, userId: number, leaguePrivacy: string, maxTrades: number, maxTeams: number, teamName: string) {
    return this.http.post<any>(`${this.endpoint}/leagues`,
     {LeagueName: leagueName, UserID: userId, LeaguePrivacy: leaguePrivacy, MaxTrades: maxTrades, MaxTeams: maxTeams, TeamName: teamName} );
  }

  public deleteLeague(leagueId) {
    return this.http.delete(`${this.endpoint}/league/${leagueId}`);
  }

  public getLeagueRequests(leagueId) {
    return this.http.get<any>(`${this.endpoint}/league/${leagueId}/requests`);
  }

  public joinLeague(senderId: number, leagueId: number, teamName: string) {
    return this.http.post<any>(`${this.endpoint}/league/joinLeague`,
     {SenderID: senderId, LeagueID: leagueId, TeamName: teamName} );
  }

  public requestToJoinLeague(senderId: number, leagueId: number, teamName: string) {
    return this.http.post<any>(`${this.endpoint}/league/requestInvite`,
     {SenderID: senderId, LeagueID: leagueId, TeamName: teamName} );
  }

  public leaveLeague(userId: number, leagueId: number) {
    return this.http.delete(`${this.endpoint}/user/${userId}/league/${leagueId}/leaveLeague`);
  }

  public acceptLeagueRequest(senderId: number, leagueId: number, teamName: string) {
    return this.http.post<any>(`${this.endpoint}/league/acceptRequest`,
     {SenderID: senderId, LeagueID: leagueId, TeamName: teamName} );
  }

  public declineRequest(senderId: number, leagueId: number) {
    return this.http.delete(`${this.endpoint}/league/${leagueId}/user/${senderId}/deleteRequest`);
  }

  public updateLeague(leagueId: number, year: number, leagueName: string, numberTeams: number,
    typeScoring: string, leaguePrivacy: string, maxTrades: number) {
    return this.http.patch(`${this.endpoint}/league/${leagueId}`,
    {Year: year, LeagueName: leagueName, NumberTeams: numberTeams,
      TypeScoring: typeScoring, LeaguePrivacy: leaguePrivacy, MaxTrades: maxTrades});
  }
}
