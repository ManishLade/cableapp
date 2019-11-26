import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CasProviderSettingComponent } from './cas-provider-setting.component';

const routes: Routes = [
    {
        path: '',
        component: CasProviderSettingComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CasProviderSettingRoutingModule {}
