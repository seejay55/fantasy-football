import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamInformationPageComponent } from './team-information-page.component';

describe('TeamInformationPageComponent', () => {
  let component: TeamInformationPageComponent;
  let fixture: ComponentFixture<TeamInformationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamInformationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamInformationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
