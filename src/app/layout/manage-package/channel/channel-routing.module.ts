import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChannelComponent } from './channel.component';
import { AddChannelComponent } from './dialogs/add/add.dialog.component';
import { EditChannelComponent } from './dialogs/edit/edit.dialog.component';

const routes: Routes = [
    {
        path: '',
        component: ChannelComponent
    },
    {
        path: 'add',
        component: AddChannelComponent
    },
    {
        path: 'edit',
        component: EditChannelComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ChannelRoutingModule {}
