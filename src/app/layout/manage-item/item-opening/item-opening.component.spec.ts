import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HardwareItemComponent } from './hardwareItem.component';

describe('HardwareItemComponent', () => {
  let component: HardwareItemComponent;
  let fixture: ComponentFixture<HardwareItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HardwareItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HardwareItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
