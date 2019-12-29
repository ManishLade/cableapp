import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubscriberMasterRoutingModule } from './subscriber-master-routing.module';
import { SubscriberMasterComponent } from './subscriber-master.component';

@NgModule({
  declarations: [SubscriberMasterComponent],
  imports: [
    CommonModule,
    SubscriberMasterRoutingModule
  ]
})
export class SubscriberMasterModule { }
