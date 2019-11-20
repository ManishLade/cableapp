import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryComponent } from './country/country.component';

const routes: Routes = [
    // {
    //     path: 'country',
    //     component: CountryComponent,
    // },
    { path: 'country', loadChildren: () => import('./country/country-module').then(m => m.CountryModule) },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PrimaryMastersRoutingModule {}
