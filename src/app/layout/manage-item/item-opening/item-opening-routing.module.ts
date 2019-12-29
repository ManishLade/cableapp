import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DevicePairingComponent } from '../device-pairing/device-pairing.component';
import { ItemOpeningComponent } from './item-opening.component';

const routes: Routes = [{
  path: '',
  component: ItemOpeningComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemOpeningRoutingModule { }
