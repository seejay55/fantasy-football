import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueInformationPageComponent } from './league-information-page.component';

describe('LeagueInformationPageComponent', () => {
  let component: LeagueInformationPageComponent;
  let fixture: ComponentFixture<LeagueInformationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeagueInformationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueInformationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
