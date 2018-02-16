import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueAcceptComponent } from './league-accept.component';

describe('LeagueAcceptComponent', () => {
  let component: LeagueAcceptComponent;
  let fixture: ComponentFixture<LeagueAcceptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeagueAcceptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueAcceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
