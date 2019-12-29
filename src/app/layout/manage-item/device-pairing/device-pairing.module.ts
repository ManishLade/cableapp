import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevicePairingRoutingModule } from './device-pairing-routing.module';
import { DevicePairingComponent } from './device-pairing.component';

@NgModule({
  declarations: [DevicePairingComponent],
  imports: [
    CommonModule,
    DevicePairingRoutingModule
  ]
})
export class DevicePairingModule { }
