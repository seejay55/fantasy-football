import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAccContentComponent } from './edit-acc-content.component';

describe('EditAccContentComponent', () => {
  let component: EditAccContentComponent;
  let fixture: ComponentFixture<EditAccContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAccContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAccContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
