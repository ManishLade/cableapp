import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageAgentsComponent } from './manage-agents.component';
import { AddManageAgentsComponent } from './dialogs/add/add.dialog.component';
import { EditManageAgentsComponent } from './dialogs/edit/edit.dialog.component';

const routes: Routes = [
    {
        path: '',
        component: ManageAgentsComponent
    },
    {
        path: 'add',
        component: AddManageAgentsComponent
    },
    {
        path: 'edit',
        component: EditManageAgentsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ManageAgentsRoutingModule {}
