import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitesPageComponent } from './invites-page.component';

describe('InvitesPageComponent', () => {
  let component: InvitesPageComponent;
  let fixture: ComponentFixture<InvitesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvitesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
