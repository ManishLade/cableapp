import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FranchiseeComponent } from './franchisee.component';
import { AddFranchiseeComponent } from './dialogs/add/add.dialog.component';
import { EditFranchiseeComponent } from './dialogs/edit/edit.dialog.component';

const routes: Routes = [
    {
        path: '',
        component: FranchiseeComponent
    },
    {
        path: 'add',
        component: AddFranchiseeComponent
    },
    {
        path: 'edit',
        component: EditFranchiseeComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FranchiseeRoutingModule {}
