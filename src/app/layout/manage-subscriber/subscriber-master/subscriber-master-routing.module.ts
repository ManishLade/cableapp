import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubscriberMasterComponent } from './subscriber-master.component';

const routes: Routes = [
  {
      path: '',
      component: SubscriberMasterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubscriberMasterRoutingModule { }
