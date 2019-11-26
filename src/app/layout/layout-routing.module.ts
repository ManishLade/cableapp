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
            { path: 'manage-agents', loadChildren: () => import('./manage-agents/manage-agents.module').then(m => m.ManageAgentsModule) },
            { path: 'kits', loadChildren: () => import('./kits/kits.module').then(m => m.KitsModule) },
            { path: 'prepaid-subscriber', loadChildren: () => import('./prepaid-subscriber/prepaid-subscriber.module')
                                                                            .then(m => m.PrepaidSubscriberModule) },
            { path: 'company', loadChildren: () => import('./company/company.module').then(m => m.CompanyModule) },
            { path: 'country', loadChildren: () => import('./primary-masters/country/country-module').then(m => m.CountryModule) },
            { path: 'state', loadChildren: () => import('./primary-masters/state/state.module').then(m => m.StateModule) },
            { path: 'city', loadChildren: () => import('./primary-masters/city/city.module').then(m => m.CityModule) },
            { path: 'area', loadChildren: () => import('./primary-masters/area/area.module').then(m => m.AreaModule) },
            { path: 'zone', loadChildren: () => import('./primary-masters/zone/zone.module').then(m => m.ZoneModule) },
            { path: 'franchisee', loadChildren: () => import('./franchisee/franchisee.module').then(m => m.FranchiseeModule) },
            { path: 'item-category', loadChildren: () => import('./item-category/item-category.module')
                                                                            .then(m => m.ItemCategoryModule) },
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
