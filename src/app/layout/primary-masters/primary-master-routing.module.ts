import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryComponent } from './country/country.component';

const routes: Routes = [
    { path: 'country', loadChildren: () => import('./country/country-module').then(m => m.CountryModule) },
    { path: 'state', loadChildren: () => import('./state/state.module').then(m => m.StateModule) },
    { path: 'city', loadChildren: () => import('./city/city.module').then(m => m.CityModule) },
    { path: 'area', loadChildren: () => import('./area/area.module').then(m => m.AreaModule) },
    { path: 'zone', loadChildren: () => import('./zone/zone.module').then(m => m.ZoneModule) }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PrimaryMastersRoutingModule {}
