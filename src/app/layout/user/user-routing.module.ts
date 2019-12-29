import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { AddUserComponent } from './dialogs/add/add.dialog.component';
import { EditUserComponent } from './dialogs/edit/edit.dialog.component';

const routes: Routes = [
    {
        path: '',
        component: UserComponent
    },
    {
        path: 'add',
        component: AddUserComponent
    },
    {
        path: 'edit',
        component: EditUserComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule {}
