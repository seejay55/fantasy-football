import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoringLeadersPageComponent } from './scoring-leaders-page.component';

describe('ScoringLeadersPageComponent', () => {
  let component: ScoringLeadersPageComponent;
  let fixture: ComponentFixture<ScoringLeadersPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoringLeadersPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoringLeadersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
