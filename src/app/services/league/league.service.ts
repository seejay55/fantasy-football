import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { League } from '../../models/league';

@Injectable()
export class LeagueService {

  endpoint = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  public getUserLeagues(userId: number) {
    return this.http.get<any[]>(`${this.endpoint}/user/${userId}/leagues`);
  }

}
