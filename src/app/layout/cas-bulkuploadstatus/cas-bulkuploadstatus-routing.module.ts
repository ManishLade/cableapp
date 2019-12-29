import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CasBulkuploadstatusComponent } from './cas-bulkuploadstatus.component';

const routes: Routes = [{
  path: '',
  component: CasBulkuploadstatusComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CasBulkuploadstatusRoutingModule { }
