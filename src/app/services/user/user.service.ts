import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../../models/user';

@Injectable()
export class UserService {

  endpoint = 'localhost:8000/api/user';

  constructor(private http: HttpClient) { }

  // public getAllUsers() { }

  public getUser(id: number) {
    return this.http.get(`${this.endpoint}/user/${id}`);
  }

  public createUser(user: User) { }
  public updateUser(user: User) { }

  public deleteUser(id: number) {
    return this.http.delete(`${this.endpoint}/user/${id}`);
  }

}
