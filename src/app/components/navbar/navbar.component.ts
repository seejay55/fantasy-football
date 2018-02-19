import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navMenu = [
    {
      name: 'Leagues',
      children: [
        {
          name: 'Find League',
          route: '/find-league',
          active: true,
          dividerBelow: false
        },
        {
          name: 'Create League',
          route: '/create-league',
          active: true,
          dividerBelow: false
        },
        {
          name: 'League Requests',
          route: '/league-requests',
          active: true,
          dividerBelow: false
        }
      ]
    },
    {
      name: 'Find Users',
      children: [
        {
          name: 'Find User',
          route: '/find-user',
          active: true,
          dividerBelow: false
        },
      ]
    }
  ];

  user: {
    firstName: string,
    lastName: string,
    userName: string
  };

  breadcrumbName: string;
  routeUrl: string;


  constructor(private router: Router) {
    this.user = null;
    router.events.subscribe((routeData: any) => {this.routeUrl = routeData; console.log(routeData); });
    this.breadcrumbName = this.routeUrl;
  }

  ngOnInit() {
  }

  private toggleTestUser() {
    if (this.user == null) {
      this.user = {
        firstName: 'Test',
        lastName: 'User',
        userName: '@testUser'
      };
    } else { this.user = null; }
    console.log(this.user);
  }

  private route(route: string, breadcrumbName: string) {
    this.router.navigate([route]);
    this.setBreadCrumb(breadcrumbName);
  }

  private setBreadCrumb(breadcrumbName: string) {
    console.log(this.routeUrl);
    this.breadcrumbName = this.routeUrl;
  }

}
