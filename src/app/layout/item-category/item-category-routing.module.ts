import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemCategoryComponent } from './item-category.component';
import { AddItemCategoryComponent } from './dialogs/add/add.dialog.component';
import { EditItemCategoryComponent } from './dialogs/edit/edit.dialog.component';

const routes: Routes = [
    {
        path: '',
        component: ItemCategoryComponent
    },
    {
        path: 'add',
        component: AddItemCategoryComponent
    },
    {
        path: 'edit',
        component: EditItemCategoryComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ItemCategoryRoutingModule {}
