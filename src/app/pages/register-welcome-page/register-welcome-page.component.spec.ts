import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterWelcomePageComponent } from './register-welcome-page.component';

describe('RegisterWelcomePageComponent', () => {
  let component: RegisterWelcomePageComponent;
  let fixture: ComponentFixture<RegisterWelcomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterWelcomePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterWelcomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
