import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FranchiseeMessageComponent } from './franchisee-message.component';

describe('FranchiseeMessageComponent', () => {
  let component: FranchiseeMessageComponent;
  let fixture: ComponentFixture<FranchiseeMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FranchiseeMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FranchiseeMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
