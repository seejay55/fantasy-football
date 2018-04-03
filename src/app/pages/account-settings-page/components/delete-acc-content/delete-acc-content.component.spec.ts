import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAccContentComponent } from './delete-acc-content.component';

describe('DeleteAccContentComponent', () => {
  let component: DeleteAccContentComponent;
  let fixture: ComponentFixture<DeleteAccContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteAccContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAccContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
