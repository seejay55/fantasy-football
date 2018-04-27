import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueOptionsPageComponent } from './league-options-page.component';

describe('LeagueOptionsPageComponent', () => {
  let component: LeagueOptionsPageComponent;
  let fixture: ComponentFixture<LeagueOptionsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeagueOptionsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueOptionsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
