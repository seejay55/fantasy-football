import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/bundles/Rx';


import { User } from '../../models/user';

@Injectable()
export class UserService {

  endpoint = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  // /users

  // return json of all users in database
  public getAllUsers() {
    return this.http.get(`${this.endpoint}/users`);
  }

  // send new user data, create that user, and return that user after database creation
  public createUser(user: User, password: string) {
    return this.http.post(`${this.endpoint}/users`, { body: { email: user.email, userName: user.userName, password: password } });
  }


  // /user

  // send user id, get user pertaining to that id
  public getUser(id: number): Observable<User> {
    return this.http.get(`${this.endpoint}/user/${id}`);
  }

  // return json of all users LIKE @userName
  public getUserByUserName(userName: string): Observable<User> {
    return this.http.get(`${this.endpoint}/user/${userName}`);
  }

  // send updated user data, update that user, and return that user after database update
  public updateUser(userId: number, userName: string, password: string, profilePic: string) {
    return this.http.patch(`${this.endpoint}/user/${userId}`, { body: { UserName: userName, Password: password , ProfilePic: profilePic} });
  }

  // send id of user to be deleted, delete that user, then return status code.
  public deleteUser(id: number) {
    return this.http.delete(`${this.endpoint}/user/${id}`);
  }

  public getInvites(userId: number) {
    return this.http.get<any[]>(`${this.endpoint}/user/${userId}/invites`);
  }

  public acceptInvite(userId: number, leagueId: number) {
    return this.http.get(`${this.endpoint}/user/${userId}/invites/${leagueId}`);
  }

  public deleteInvite(userId: number, leagueId: number) {
    return this.http.get(`${this.endpoint}/user/${userId}/invites/${leagueId}`);
  }

}
