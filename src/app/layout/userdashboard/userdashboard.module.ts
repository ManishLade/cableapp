import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserdashboardRoutingModule } from './userdashboard-routing.module';
import { UserdashboardComponent } from './userdashboard.component';

@NgModule({
  declarations: [UserdashboardComponent],
  imports: [
    CommonModule,
    UserdashboardRoutingModule
  ]
})
export class UserdashboardModule { }
