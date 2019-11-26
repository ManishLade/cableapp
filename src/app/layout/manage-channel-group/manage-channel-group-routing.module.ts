import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageChannelGroupComponent } from './manage-channel-group.component';

const routes: Routes = [
    {
        path: '',
        component: ManageChannelGroupComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ManageChannelGroupRoutingModule {}
