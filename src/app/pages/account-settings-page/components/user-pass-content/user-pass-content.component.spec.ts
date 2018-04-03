import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPassContentComponent } from './user-pass-content.component';

describe('UserPassContentComponent', () => {
  let component: UserPassContentComponent;
  let fixture: ComponentFixture<UserPassContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPassContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPassContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
