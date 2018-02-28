import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs/bundles/Rx';
import { User } from '../../models/user';

@Injectable()
export class AuthService {

  isLoggedInSubject = new BehaviorSubject<boolean>(this.hasToken()); // sets initial loggedIn token value
  currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser'))); // sets initial currentUser value

  constructor() { }

  // Returns boolean based on localStorage token validitiy
  private hasToken(): boolean {
    return !!localStorage.getItem('token');
  }

  // Returns boolean based on sign in status
  isLoggedIn(): Observable<boolean> {
    return this.isLoggedInSubject.asObservable().share(); // returns loggedIn value to all subscribers
  }

  login(user: User): void {
    localStorage.setItem('token', 'JWT');                         // adds token to localStorage
    localStorage.setItem('currentUser', JSON.stringify(user));    // adds user information to localStorage
    this.isLoggedInSubject.next(true);                            // sets loggedIn next value to true
    this.currentUserSubject.next(user);                           // sets currentUser next value to given information
  }

  logout(): void {
    localStorage.removeItem('token');                             // removes token from localStorage
    localStorage.removeItem('currentUser');                       // removes currentUser from localStorage
    this.isLoggedInSubject.next(false);                           // sets loggedIn next value to false
    this.currentUserSubject.next(null);                           // sets currentUser next value to null
  }

  // returns currentUser to all subscribers
  getCurrentUser(): Observable<User> {
    return this.currentUserSubject.asObservable().share();
  }

}
