import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreparedSubscriberRoutingModule } from './prepared-subscriber-routing.module';
import { PreparedSubscriberComponent } from './prepared-subscriber.component';


@NgModule({
  declarations: [PreparedSubscriberComponent],
  imports: [
    CommonModule,
    PreparedSubscriberRoutingModule
  ]
})
export class PreparedSubscriberModule { }
