import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
            { path: 'charts', loadChildren: () => import('./charts/charts.module').then(m => m.ChartsModule) },
            { path: 'tables', loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule) },
            { path: 'forms', loadChildren: () => import('./form/form.module').then(m => m.FormModule) },
            { path: 'bs-element', loadChildren: () => import('./bs-element/bs-element.module').then(m => m.BsElementModule) },
            { path: 'grid', loadChildren: () => import('./grid/grid.module').then(m => m.GridModule) },
            { path: 'components', loadChildren: () => import('./bs-component/bs-component.module').then(m => m.BsComponentModule) },
            { path: 'blank-page', loadChildren: () => import('./blank-page/blank-page.module').then(m => m.BlankPageModule) },
            { path: 'role', loadChildren: () => import('./role/role.module').then(m => m.RoleModule) },
            { path: 'kits', loadChildren: () => import('./manage-agents/manage-agents.module').then(m => m.ManageAgentsModule) },
            { path: 'manage-agents', loadChildren: () => import('./kits/kits.module').then(m => m.KitsModule) },
            { path: 'prepaid-subscriber', loadChildren: () => import('./prepaid-subscriber/prepaid-subscriber.module')
                                                                            .then(m => m.PrepaidSubscriberModule) },
            { path: 'company', loadChildren: () => import('./company/company.module').then(m => m.CompanyModule) },
            { path: 'franchisee', loadChildren: () => import('./franchisee/franchisee.module').then(m => m.FranchiseeModule) },
            { path: 'item-category', loadChildren: () => import('./item-category/item-category.module')
                                                                            .then(m => m.ItemCategoryModule) },
            { path: 'primary-masters', loadChildren:
            () => import('./primary-masters/primary-master.module').then(m => m.PrimaryMasterModule)},
            { path: 'other-masters', loadChildren:
            () => import('./other-masters/other-masters.module').then(m => m.OtherMastersModule)},
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
