import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyComponent } from './company.component';
import { AddCompanyComponent } from './dialogs/add/add.dialog.component';
import { EditCompanyComponent } from './dialogs/edit/edit.dialog.component';

const routes: Routes = [
    {
        path: '',
        component: CompanyComponent
    },
    {
        path: 'add',
        component: AddCompanyComponent
    },
    {
        path: 'edit',
        component: EditCompanyComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CompanyRoutingModule {}
