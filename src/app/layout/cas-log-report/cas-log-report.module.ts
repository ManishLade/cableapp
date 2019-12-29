import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CasLogReportRoutingModule } from './cas-log-report-routing.module';
import { CasLogReportComponent } from './cas-log-report.component';

@NgModule({
  declarations: [CasLogReportComponent],
  imports: [
    CommonModule,
    CasLogReportRoutingModule
  ]
})
export class CasLogReportModule { }
