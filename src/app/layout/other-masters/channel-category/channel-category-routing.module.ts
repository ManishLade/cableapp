import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChannelCategoryComponent } from './channel-category.component';

const routes: Routes = [
    {
        path: '',
        component: ChannelCategoryComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ChannelCategoryRoutingModule {}
