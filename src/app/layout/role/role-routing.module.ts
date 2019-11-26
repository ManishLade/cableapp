import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoleComponent } from './role.component';
import { AddDialogComponent } from './dialogs/add/add.dialog.component';
import { EditDialogComponent } from './dialogs/edit/edit.dialog.component';

const routes: Routes = [
    {
        path: '', component: RoleComponent
    },
    {
        path: 'add', component: AddDialogComponent
    },
    {
        path: 'edit', component: EditDialogComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class RoleRoutingModule { }
