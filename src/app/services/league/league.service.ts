import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { League } from '../../models/league';

@Injectable()
export class LeagueService {

  endpoint = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  public getUserLeagues(userId: number) {
<<<<<<< HEAD
    return this.http.get<any[]>(`${this.endpoint}/user/${userId}/leagues`);
=======
    return this.http.get(`${this.endpoint}/user/${userId}/leagues`);
>>>>>>> 617cc7059cb5b87cd1a61d636c61306fd48929dd
  }

}
