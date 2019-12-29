import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CasNotificationRoutingModule } from './cas-notification-routing.module';
import { CasNotificationComponent } from './cas-notification.component';

@NgModule({
  declarations: [CasNotificationComponent],
  imports: [
    CommonModule,
    CasNotificationRoutingModule
  ]
})
export class CasNotificationModule { }
