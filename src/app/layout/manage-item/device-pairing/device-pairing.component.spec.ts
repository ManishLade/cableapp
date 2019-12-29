import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicePairingComponent } from './device-pairing.component';

describe('DevicePairingComponent', () => {
  let component: DevicePairingComponent;
  let fixture: ComponentFixture<DevicePairingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevicePairingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevicePairingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
