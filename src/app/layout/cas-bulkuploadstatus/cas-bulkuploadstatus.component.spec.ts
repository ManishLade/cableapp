import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasBulkuploadstatusComponent } from './cas-bulkuploadstatus.component';

describe('CasBulkuploadstatusComponent', () => {
  let component: CasBulkuploadstatusComponent;
  let fixture: ComponentFixture<CasBulkuploadstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasBulkuploadstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasBulkuploadstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
