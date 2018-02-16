import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindCreateJoinPageComponent } from './find-create-join-page.component';

describe('FindCreateJoinPageComponent', () => {
  let component: FindCreateJoinPageComponent;
  let fixture: ComponentFixture<FindCreateJoinPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindCreateJoinPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindCreateJoinPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
