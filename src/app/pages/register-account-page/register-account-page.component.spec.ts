import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAccountPageComponent } from './register-account-page.component';

describe('RegisterAccountPageComponent', () => {
  let component: RegisterAccountPageComponent;
  let fixture: ComponentFixture<RegisterAccountPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterAccountPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterAccountPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
