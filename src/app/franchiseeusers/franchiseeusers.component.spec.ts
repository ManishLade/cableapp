import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FranchiseeusersComponent } from './franchiseeusers.component';

describe('FranchiseeusersComponent', () => {
  let component: FranchiseeusersComponent;
  let fixture: ComponentFixture<FranchiseeusersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FranchiseeusersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FranchiseeusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
