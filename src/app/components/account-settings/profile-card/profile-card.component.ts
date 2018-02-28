import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../../../models/user';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit, OnDestroy {

  user: User;
  userSubscription: any;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.userSubscription = this.authService.getCurrentUser()
      .subscribe(user => { this.user = user; });
  }

  ngOnDestroy() { this.userSubscription.unsubscribe(); }

}
