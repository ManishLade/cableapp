import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasProviderSettingComponent } from './cas-provider-setting.component';

describe('CasProviderSettingComponent', () => {
  let component: CasProviderSettingComponent;
  let fixture: ComponentFixture<CasProviderSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasProviderSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasProviderSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
