import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemOpeningRoutingModule } from './item-opening-routing.module';
import { ItemOpeningComponent } from './item-opening.component';

@NgModule({
  declarations: [ItemOpeningComponent],
  imports: [
    CommonModule,
    ItemOpeningRoutingModule
  ]
})
export class ItemOpeningModule { }
