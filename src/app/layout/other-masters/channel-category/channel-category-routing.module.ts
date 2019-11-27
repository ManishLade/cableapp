import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChannelCategoryComponent } from './channel-category.component';
import { AddChannelCategoryComponent } from './dialogs/add/add.dialog.component';
import { EditChannelCategoryComponent } from './dialogs/edit/edit.dialog.component';

const routes: Routes = [
    {
        path: '',
        component: ChannelCategoryComponent
    },
    {
        path: 'add',
        component: AddChannelCategoryComponent
    },
    {
        path: 'edit',
        component: EditChannelCategoryComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ChannelCategoryRoutingModule {}
