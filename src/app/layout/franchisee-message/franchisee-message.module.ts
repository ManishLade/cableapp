import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FranchiseeMessageRoutingModule } from './franchisee-message-routing.module';
import { FranchiseeMessageComponent } from './franchisee-message.component';

@NgModule({
  declarations: [FranchiseeMessageComponent],
  imports: [
    CommonModule,
    FranchiseeMessageRoutingModule
  ]
})
export class FranchiseeMessageModule { }
