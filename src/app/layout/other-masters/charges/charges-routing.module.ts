import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChargesComponent } from './charges.component';

const routes: Routes = [
    {
        path: '',
        component: ChargesComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ChargesRoutingModule {}
