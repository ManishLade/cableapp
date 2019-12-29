import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CasNotificationComponent } from './cas-notification.component';

const routes: Routes = [{
  path: '',
  component: CasNotificationComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CasNotificationRoutingModule { }
