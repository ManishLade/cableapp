import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FranchiseeComponent } from './franchisee.component';

const routes: Routes = [
    {
        path: '',
        component: FranchiseeComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FranchiseeRoutingModule {}
