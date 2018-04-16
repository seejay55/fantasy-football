import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLeaguePageComponent } from './create-league-page.component';

describe('CreateLeaguePageComponent', () => {
  let component: CreateLeaguePageComponent;
  let fixture: ComponentFixture<CreateLeaguePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateLeaguePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateLeaguePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
