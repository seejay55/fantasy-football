
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-find-user',
  templateUrl: './find-user.component.html',
  styleUrls: ['./find-user.component.css'],
  providers: [UserService]
})
export class FindUserComponent implements OnInit {

  searchResults: User[] = [];

  private availableLeagues = [
    {'leagueID': 88100, 'leagueName': 'Memes', 'openSpots': true, 'ownedByMe': true},
    {'leagueID': 88101, 'leagueName': 'Dreams', 'openSpots': true, 'ownedByMe': true},
    {'leagueID': 88102, 'leagueName': 'Sportsball', 'openSpots': true, 'ownedByMe': true}
  ];

  constructor(private userService: UserService) { }

  ngOnInit() {
  }


  private searchListener(searchTerm: String) {
    console.log(searchTerm);
  }

  private sendListener() {
    console.log('invite sent');
  }

  private search(term: string): void {
    this.searchResults = [];
    this.userService.getUserLikeUserName(term).subscribe(
      (results) => { 
        results.forEach((user) =>{
            console.log(user);
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
