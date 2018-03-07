import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  // return json of all users LIKE @userName
  public getUserByUserName(userName: string) {
    return this.http.get(`${this.endpoint}/users/${userName}`);
  }

  // send new user data, create that user, and return that user after database creation
  public createUser(user: User, password: string) {
    return this.http.post(`${this.endpoint}/users`, { body: { email: user.email, userName: user.userName, password: password } });
  }


  // /user

  // send user id, get user pertaining to that id
  public getUser(id: number) {
    return this.http.get(`${this.endpoint}/user/${id}`);
  }

  // send updated user data, update that user, and return that user after database update
  public updateUser(user: User) {
    return this.http.patch(`${this.endpoint}/user/${user._id}`, { body: { userName: user.userName } });
  }

  // send id of user to be deleted, delete that user, then return status code.
  public deleteUser(id: number) {
    return this.http.delete(`${this.endpoint}/user/${id}`);
  }

}
