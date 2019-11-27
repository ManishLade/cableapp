import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChargesComponent } from './charges.component';
import { AddChargesComponent } from './dialogs/add/add.dialog.component';
import { EditChargesComponent } from './dialogs/edit/edit.dialog.component';

const routes: Routes = [
    {
        path: '',
        component: ChargesComponent
    },
    {
        path: 'add',
        component: AddChargesComponent
    },
    {
        path: 'edit',
        component: EditChargesComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ChargesRoutingModule {}
