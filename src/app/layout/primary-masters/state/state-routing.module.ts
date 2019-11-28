import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StateComponent } from './state.component';
import { AddStateComponent } from './dialogs/add/add.dialog.component';
import { EditStateComponent } from './dialogs/edit/edit.dialog.component';

const routes: Routes = [
    {
        path: '',
        component: StateComponent
    },
    {
        path: 'add', component: AddStateComponent
    },
    {
        path: 'edit', component: EditStateComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StateRoutingModule {}
