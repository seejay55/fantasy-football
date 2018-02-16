import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindCreateJoinPageContentComponent } from './find-create-join-page-content.component';

describe('FindCreateJoinPageContentComponent', () => {
  let component: FindCreateJoinPageContentComponent;
  let fixture: ComponentFixture<FindCreateJoinPageContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindCreateJoinPageContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindCreateJoinPageContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
