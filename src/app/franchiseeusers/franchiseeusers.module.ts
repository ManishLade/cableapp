import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FranchiseeusersRoutingModule } from './franchiseeusers-routing.module';
import { FranchiseeusersComponent } from './franchiseeusers.component';

@NgModule({
  declarations: [FranchiseeusersComponent],
  imports: [
    CommonModule,
    FranchiseeusersRoutingModule
  ]
})
export class FranchiseeusersModule { }
