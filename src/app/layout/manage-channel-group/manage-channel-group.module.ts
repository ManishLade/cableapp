import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageChannelGroupRoutingModule } from './manage-channel-group-routing.module';
import { ManageChannelGroupComponent } from './manage-channel-group.component';

@NgModule({
  declarations: [ManageChannelGroupComponent],
  imports: [
    CommonModule,
    ManageChannelGroupRoutingModule
  ]
})
export class ManageChannelGroupModule { }
