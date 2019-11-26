import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FranchiseeRoutingModule } from './franchisee-routing.module';
import { FranchiseeComponent } from './franchisee.component';

@NgModule({
  declarations: [FranchiseeComponent],
  imports: [
    CommonModule,
    FranchiseeRoutingModule
  ]
})
export class FranchiseeModule { }
