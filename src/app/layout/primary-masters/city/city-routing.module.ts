import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CityComponent } from './city.component';
import { AddCityComponent } from './dialogs/add/add.dialog.component';
import { EditCityComponent } from './dialogs/edit/edit.dialog.component';

const routes: Routes = [
    {
        path: '',
        component: CityComponent
    },
    {
        path: 'add', component: AddCityComponent
    },
    {
        path: 'edit', component: EditCityComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CityRoutingModule {}
