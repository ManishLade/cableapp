import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AreaComponent } from './area.component';
import { AddAreaComponent } from './dialogs/add/add.dialog.component';
import { EditAreaComponent } from './dialogs/edit/edit.dialog.component';

const routes: Routes = [
    {
        path: '',
        component: AreaComponent
    },
    {
        path: 'add', component: AddAreaComponent
    },
    {
        path: 'edit', component: EditAreaComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AreaRoutingModule {}
