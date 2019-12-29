import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DevicePairingComponent } from './device-pairing.component';

const routes: Routes = [{
  path: '',
  component: DevicePairingComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevicePairingRoutingModule { }
