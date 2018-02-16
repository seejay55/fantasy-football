import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantSearchComponent } from './participant-search.component';

describe('ParticipantSearchComponent', () => {
  let component: ParticipantSearchComponent;
  let fixture: ComponentFixture<ParticipantSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticipantSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
