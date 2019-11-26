import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CasProviderSettingRoutingModule } from './cas-provider-setting-routing.module';
import { CasProviderSettingComponent } from './cas-provider-setting.component';

@NgModule({
  declarations: [CasProviderSettingComponent],
  imports: [
    CommonModule,
    CasProviderSettingRoutingModule
  ]
})
export class CasProviderSettingModule { }
