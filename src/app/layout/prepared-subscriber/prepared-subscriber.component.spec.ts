import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreparedSubscriberComponent } from './prepared-subscriber.component';

describe('PreparedSubscriberComponent', () => {
  let component: PreparedSubscriberComponent;
  let fixture: ComponentFixture<PreparedSubscriberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreparedSubscriberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreparedSubscriberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
