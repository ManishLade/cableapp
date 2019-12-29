import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemComponent } from './item.component';
import { AddItemComponent } from './dialogs/add/add.dialog.component';
import { EditItemComponent } from './dialogs/edit/edit.dialog.component';

const routes: Routes = [
    {
        path: '',
        component: ItemComponent
    },
    {
        path: 'add',
        component: AddItemComponent
    },
    {
        path: 'edit',
        component: EditItemComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ItemRoutingModule {}
