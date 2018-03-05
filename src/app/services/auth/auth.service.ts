import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs/bundles/Rx';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { User } from '../../models/user';

@Injectable()
export class AuthService {

  endpoint = 'http://localhost:8000/api/user';

  isLoggedInSubject = new BehaviorSubject<boolean>(this.hasToken()); // sets initial loggedIn token value
  currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser'))); // sets initial currentUser value

  constructor(private http: HttpClient) { }

  // Returns boolean based on localStorage token validitiy
  private hasToken(): boolean {
    return !!localStorage.getItem('token');
  }

  private userAuth(email: string, password: string): Observable {
<<<<<<< HEAD
    return this.http.get(`${this.endpoint}/authenticate?email=${email}&password=${password}`);
=======
    return this.http.get(`${this.endpoint}/authenticate?email=${email}?password=${password}`);
>>>>>>> f0724800674dd24e1a7b6ce73229cd27ef27b9b8
  }

  // Returns boolean based on sign in status
  isLoggedIn(): Observable<boolean> {
    return this.isLoggedInSubject.asObservable().share(); // returns loggedIn value to all subscribers
  }


  login(email: string, password: string): void {
    let user: User;
    this.userAuth(email, password)
<<<<<<< HEAD
      .subscribe(
        (data) => {
          console.log('email and password both match a user');
          user = <User>data;
          console.log(user);
          this.setCurrentUser(user);
      },
        (err) => {
          console.log(err.error);
          window.alert(err.error);
        }
      );

    // user = new User(0, email, 'testUser', 'Test', 'User');
=======
      .subscribe(data => {
        user = <User>data;
      },
      (err: HttpErrorResponse) => { console.log(err), console.log('There was an error'); }
    );

    user = new User(0, email, 'testUser', 'Test', 'User');
    localStorage.setItem('token', 'JWT');                         // adds token to localStorage
    localStorage.setItem('currentUser', JSON.stringify(user));    // adds user information to localStorage
    this.isLoggedInSubject.next(true);                            // sets loggedIn next value to true
    this.currentUserSubject.next(user);                           // sets currentUser next value to given information
>>>>>>> f0724800674dd24e1a7b6ce73229cd27ef27b9b8
  }

  logout(): void {
    localStorage.removeItem('token');                             // removes token from localStorage
    localStorage.removeItem('currentUser');                       // removes currentUser from localStorage
    this.isLoggedInSubject.next(false);                           // sets loggedIn next value to false
    this.currentUserSubject.next(null);                           // sets currentUser next value to null
  }

<<<<<<< HEAD
  setCurrentUser(user: User): void {
    localStorage.setItem('token', 'JWT');                         // adds token to localStorage
    localStorage.setItem('currentUser', JSON.stringify(user));    // adds user information to localStorage
    this.isLoggedInSubject.next(true);                            // sets loggedIn next value to true
    this.currentUserSubject.next(user);                           // sets currentUser next value to given information
  }

=======
>>>>>>> f0724800674dd24e1a7b6ce73229cd27ef27b9b8
  // returns currentUser to all subscribers
  getCurrentUser(): Observable<User> {
    return this.currentUserSubject.asObservable().share();
  }

}
