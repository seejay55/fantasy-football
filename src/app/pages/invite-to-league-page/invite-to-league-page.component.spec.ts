import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteToLeaguePageComponent } from './invite-to-league-page.component';

describe('InviteToLeaguePageComponent', () => {
  let component: InviteToLeaguePageComponent;
  let fixture: ComponentFixture<InviteToLeaguePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InviteToLeaguePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteToLeaguePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
