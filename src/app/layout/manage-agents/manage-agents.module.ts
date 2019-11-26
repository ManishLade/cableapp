import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageAgentsRoutingModule } from './manage-agents-routing.module';
import { ManageAgentsComponent } from './manage-agents.component';

@NgModule({
  declarations: [ManageAgentsComponent],
  imports: [
    CommonModule,
    ManageAgentsRoutingModule
  ]
})
export class ManageAgentsModule { }
