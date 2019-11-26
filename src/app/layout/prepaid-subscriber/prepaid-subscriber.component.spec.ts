import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepaidSubscriberComponent } from './prepaid-subscriber.component';

describe('PrepaidSubscriberComponent', () => {
  let component: PrepaidSubscriberComponent;
  let fixture: ComponentFixture<PrepaidSubscriberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrepaidSubscriberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrepaidSubscriberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
