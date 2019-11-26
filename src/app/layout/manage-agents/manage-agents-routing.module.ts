import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageAgentsComponent } from './manage-agents.component';

const routes: Routes = [
    {
        path: '',
        component: ManageAgentsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ManageAgentsRoutingModule {}
