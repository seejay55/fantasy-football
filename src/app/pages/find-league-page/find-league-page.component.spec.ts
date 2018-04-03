import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindLeaguePageComponent } from './find-league-page.component';

describe('FindLeaguePageComponent', () => {
  let component: FindLeaguePageComponent;
  let fixture: ComponentFixture<FindLeaguePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindLeaguePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindLeaguePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
