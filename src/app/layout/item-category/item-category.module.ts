import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemCategoryRoutingModule } from './item-category-routing.module';
import { ItemCategoryComponent } from './item-category.component';

@NgModule({
  declarations: [ItemCategoryComponent],
  imports: [
    CommonModule,
    ItemCategoryRoutingModule
  ]
})
export class ItemCategoryModule { }
