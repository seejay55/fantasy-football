import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueInvitesComponent } from './league-invites.component';

describe('LeagueInvitesComponent', () => {
  let component: LeagueInvitesComponent;
  let fixture: ComponentFixture<LeagueInvitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeagueInvitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueInvitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
