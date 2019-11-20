import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryComponent } from './country.component';
import { AddDialogComponent } from './dialogs/add/add.dialog.component';

const routes: Routes = [
    {
        path: '', component: CountryComponent
    },
    {
        path: 'add', component: AddDialogComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountryRoutingModule { }
