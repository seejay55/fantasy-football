
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { User } from '../../models/user';

import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-find-user',
  templateUrl: './find-user.component.html',
  styleUrls: ['./find-user.component.css'],
  providers: [UserService]
})
export class FindUserComponent implements OnInit {

  lastResults: User[] = [];
  searchResults: User[] = [];

  private searchUpdated: Subject<string> = new Subject<string>();

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.searchUpdated.distinctUntilChanged().debounceTime(500).subscribe(
      (searchTerm) => {
        this.search(searchTerm);
      },
      (err) => console.log(err)
    );
  }

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
      (err) => { console.log(err.error); }
    );
  }

}
