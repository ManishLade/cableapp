import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FranchiseeMessageComponent } from './franchisee-message.component';

const routes: Routes = [{
  path: '',
  component: FranchiseeMessageComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FranchiseeMessageRoutingModule { }
