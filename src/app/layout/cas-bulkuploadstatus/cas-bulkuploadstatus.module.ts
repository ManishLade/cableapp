import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CasBulkuploadstatusRoutingModule } from './cas-bulkuploadstatus-routing.module';
import { CasBulkuploadstatusComponent } from './cas-bulkuploadstatus.component';

@NgModule({
  declarations: [CasBulkuploadstatusComponent],
  imports: [
    CommonModule,
    CasBulkuploadstatusRoutingModule
  ]
})
export class CasBulkuploadstatusModule { }
