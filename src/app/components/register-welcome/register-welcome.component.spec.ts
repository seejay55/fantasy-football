import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterWelcomeComponent } from './register-welcome.component';

describe('RegisterWelcomeComponent', () => {
  let component: RegisterWelcomeComponent;
  let fixture: ComponentFixture<RegisterWelcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterWelcomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
