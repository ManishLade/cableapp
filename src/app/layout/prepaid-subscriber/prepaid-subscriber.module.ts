import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrepaidSubscriberRoutingModule } from './prepaid-subscriber-routing.module';
import { PrepaidSubscriberComponent } from './prepaid-subscriber.component';

@NgModule({
  declarations: [PrepaidSubscriberComponent],
  imports: [
    CommonModule,
    PrepaidSubscriberRoutingModule
  ]
})
export class PrepaidSubscriberModule { }
