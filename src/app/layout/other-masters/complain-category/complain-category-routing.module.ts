import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComplainCategoryComponent } from './complain-category.component';
import { AddComplainCategoryComponent } from './dialogs/add/add.dialog.component';
import { EditComplainCategoryComponent } from './dialogs/edit/edit.dialog.component';

const routes: Routes = [
    {
        path: '',
        component: ComplainCategoryComponent
    },
    {
        path: 'add',
        component: AddComplainCategoryComponent
    },
    {
        path: 'edit',
        component: EditComplainCategoryComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ComplainCategoryRoutingModule {}
