import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchLeaguePageComponent } from './search-league-page.component';

describe('SearchLeaguePageComponent', () => {
  let component: SearchLeaguePageComponent;
  let fixture: ComponentFixture<SearchLeaguePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchLeaguePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchLeaguePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
