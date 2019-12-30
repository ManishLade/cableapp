import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HardwareItemComponent } from './item-opening.component';
import { AddHardwareItemComponent } from './dialogs/add/add.dialog.component';
import { EditHardwareItemComponent } from './dialogs/edit/edit.dialog.component';

const routes: Routes = [
    {
        path: '',
        component: HardwareItemComponent
    },
    {
        path: 'add',
        component: AddHardwareItemComponent
    },
    {
        path: 'edit',
        component: EditHardwareItemComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HardwareItemRoutingModule {}
