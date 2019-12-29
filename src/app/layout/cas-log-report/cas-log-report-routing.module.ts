import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CasLogReportComponent } from './cas-log-report.component';

const routes: Routes = [{
  path: '',
  component: CasLogReportComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CasLogReportRoutingModule { }
