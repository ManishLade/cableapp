import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageChannelGroupComponent } from './manage-channel-group.component';

describe('ManageChannelGroupComponent', () => {
  let component: ManageChannelGroupComponent;
  let fixture: ComponentFixture<ManageChannelGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageChannelGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageChannelGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
