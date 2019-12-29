import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasLogReportComponent } from './cas-log-report.component';

describe('CasLogReportComponent', () => {
  let component: CasLogReportComponent;
  let fixture: ComponentFixture<CasLogReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasLogReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasLogReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
