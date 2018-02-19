import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindLeagueComponent } from './find-league.component';

describe('FindLeagueComponent', () => {
  let component: FindLeagueComponent;
  let fixture: ComponentFixture<FindLeagueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindLeagueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindLeagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
