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

  public createLeague(leagueName: string, userId: number, leaguePrivacy: string, maxTrades: number, maxTeams: number) {
    return this.http.post<any>(`${this.endpoint}/leagues`,
     {LeagueName: leagueName, UserID: userId, LeaguePrivacy: leaguePrivacy, MaxTrades: maxTrades, MaxTeams: maxTeams} );
  }

}
