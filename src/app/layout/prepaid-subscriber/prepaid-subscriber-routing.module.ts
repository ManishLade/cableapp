import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrepaidSubscriberComponent } from './prepaid-subscriber.component';

const routes: Routes = [
    {
        path: '',
        component: PrepaidSubscriberComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PrepaidSubscriberRoutingModule {}
