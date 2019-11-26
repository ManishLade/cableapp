import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComplainCategoryComponent } from './complain-category.component';

const routes: Routes = [
    {
        path: '',
        component: ComplainCategoryComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ComplainCategoryRoutingModule {}
