import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ZoneComponent } from './zone.component';
import { AddZoneComponent } from './dialogs/add/add.dialog.component';
import { EditZoneComponent } from './dialogs/edit/edit.dialog.component';

const routes: Routes = [
    {
        path: '',
        component: ZoneComponent
    },
    {
        path: 'add', component: AddZoneComponent
    },
    {
        path: 'edit', component: EditZoneComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ZoneRoutingModule {}
