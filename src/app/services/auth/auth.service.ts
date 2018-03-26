import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs/bundles/Rx';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { User } from '../../models/user';
import { AlertService } from '../../shared/services/alert.service';

@Injectable()
export class AuthService {

  endpoint = 'http://localhost:8000/api/user';

  isLoggedInSubject = new BehaviorSubject<boolean>(this.hasToken()); // sets initial loggedIn token value
  currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser'))); // sets initial currentUser value

  constructor(
    private http: HttpClient,
    private alertService: AlertService
  ) { }

  // Returns boolean based on localStorage token validitiy
  private hasToken(): boolean {
    return !!localStorage.getItem('token');
  }

  private userAuth(email: string, password: string): Observable {
    return this.http.get(`${this.endpoint}/authenticate`, { headers: {email: email, password: password }});
  }

  // Returns boolean based on sign in status
  isLoggedIn(): Observable<boolean> {
    return this.isLoggedInSubject.asObservable().share(); // returns loggedIn value to all subscribers
  }

  login(email: string, password: string): void {
    let user: User;
    this.userAuth(email, password)
      .subscribe(
        (data) => {
          user = <User>data;
          this.setCurrentUser(user);
      },
        (err) => {
          this.alertService.danger(err.name, err.message, false);
        }
      );
  }

  logout(): void {
    localStorage.removeItem('token');                             // removes token from localStorage
    localStorage.removeItem('currentUser');                       // removes currentUser from localStorage
    this.isLoggedInSubject.next(false);                           // sets loggedIn next value to false
    this.currentUserSubject.next(null);                           // sets currentUser next value to null
  }

  setCurrentUser(user: User): void {
    localStorage.setItem('token', 'JWT');                         // adds token to localStorage
    localStorage.setItem('currentUser', JSON.stringify(user));    // adds user information to localStorage
    this.isLoggedInSubject.next(true);                            // sets loggedIn next value to true
    this.currentUserSubject.next(user);                           // sets currentUser next value to given information
  }

  // returns currentUser to all subscribers
  getCurrentUser(): Observable<User> {
    return this.currentUserSubject.asObservable().share();
  }

}
