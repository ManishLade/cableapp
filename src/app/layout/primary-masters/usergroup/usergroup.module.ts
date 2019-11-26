import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsergroupRoutingModule } from './usergroup-routing.module';
import { UsergroupComponent } from './usergroup.component';

@NgModule({
  declarations: [UsergroupComponent],
  imports: [
    CommonModule,
    UsergroupRoutingModule
  ]
})
export class UsergroupModule { }
