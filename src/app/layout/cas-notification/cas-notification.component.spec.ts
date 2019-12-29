import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasNotificationComponent } from './cas-notification.component';

describe('CasNotificationComponent', () => {
  let component: CasNotificationComponent;
  let fixture: ComponentFixture<CasNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
