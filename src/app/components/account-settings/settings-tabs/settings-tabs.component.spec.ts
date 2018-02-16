import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsTabsComponent } from './settings-tabs.component';

describe('SettingsTabsComponent', () => {
  let component: SettingsTabsComponent;
  let fixture: ComponentFixture<SettingsTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
