import { Component, OnInit } from '@angular/core';

import { User } from '@models/user';

import { UserService } from '@services/user/user.service';
import { AlertService } from '@shared/services/alert.service';

import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-find-user-page',
  templateUrl: './find-user-page.component.html',
  styleUrls: ['./find-user-page.component.css'],
  providers: [UserService]
})
export class FindUserPageComponent implements OnInit {

  lastResults: User[] = [];
  searchResults: User[] = [];

  private searchUpdated: Subject<string> = new Subject<string>();

  constructor(private userService: UserService, private alertService: AlertService) { }

  ngOnInit() {
    // Subscribe to the updated search term to get the changes after no changes are detected for 500ms
    this.searchUpdated.distinctUntilChanged().debounceTime(500).subscribe(
      (searchTerm) => {
        this.search(searchTerm);
      },
      (err) => console.log(err)
    );
  }

  // Search by input keyup detection
  private searchDebounce(term) {
    this.searchUpdated.next(term);
  }

  private search(term: string): void {
    this.searchResults = [];
    this.userService.getUserLikeUserName(term).subscribe(
      (results) => {
        results.forEach((user) => {
          const temp = new User(
            user.ID,
            user.Email,
            user.Username,
            user.FirstName,
            user.LastName
          );
          this.searchResults.push(temp);
        });
        console.log(this.searchResults);
      },
      (err) => {
        this.alertService.clear();
        this.alertService.danger('Error', 'There was a problem with your search. Please try again.', false);
      }
    );
  }

}
