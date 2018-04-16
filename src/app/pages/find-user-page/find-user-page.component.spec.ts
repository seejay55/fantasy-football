import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindUserPageComponent } from './find-user-page.component';

describe('FindUserPageComponent', () => {
  let component: FindUserPageComponent;
  let fixture: ComponentFixture<FindUserPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindUserPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindUserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
