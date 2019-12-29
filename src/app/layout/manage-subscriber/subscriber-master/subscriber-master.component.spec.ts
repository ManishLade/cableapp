import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriberMasterComponent } from './subscriber-master.component';

describe('SubscriberMasterComponent', () => {
  let component: SubscriberMasterComponent;
  let fixture: ComponentFixture<SubscriberMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriberMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriberMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
