import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  public createUser(email: string, userName: string, firstName: string, lastName: string, password: string) {
    return this.http.post<any>(`${this.endpoint}/users`,
    { Email: email, Username: userName, FirstName: firstName, LastName: lastName, Password: password } );
  }


  // /user

  // send user id, get user pertaining to that id
  public getUser(id: number): Observable<User> {
    return this.http.get(`${this.endpoint}/user/${id}`);
  }

  // return json of all users by @userName
  public getUserByUserName(userName: string): Observable<User> {
    return this.http.get(`${this.endpoint}/user/${userName}`);
  }

  // return json of all users LIKE @userName
  public getUserLikeUserName(userName: string): Observable<User> {
    return this.http.get<any[]>(`${this.endpoint}/users/search/?query=${userName}`);
  }

  

  // send updated user data, update that user, and return that user after database update
  public updateUser(userId: number, email: string,  userName: string) {
    return this.http.patch(`${this.endpoint}/user/${userId}`,
    { Email: email, Username: userName } );
  }

  public updateUserPassword(userId: number, password: string) {
    return this.http.patch(`${this.endpoint}/user/${userId}`,
    { Password: password } );
  }

  // send id of user to be deleted, delete that user, then return status code.
  public deleteUser(id: number) {
    return this.http.delete(`${this.endpoint}/user/${id}`);
  }

  public getInvites(userId: number) {
    return this.http.get<any[]>(`${this.endpoint}/user/${userId}/invites`);
  }

  public acceptInvite(userId: number, leagueId: number) {
    return this.http.post(`${this.endpoint}/user/${userId}/invites/${leagueId}`, {} );
  }

  public declineInvite(userId: number, leagueId: number) {
    return this.http.delete(`${this.endpoint}/user/${userId}/invites/${leagueId}`);
  }

}
