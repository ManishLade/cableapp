import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComplainCategoryRoutingModule } from './complain-category-routing.module';
import { ComplainCategoryComponent } from './complain-category.component';

@NgModule({
  declarations: [ComplainCategoryComponent],
  imports: [
    CommonModule,
    ComplainCategoryRoutingModule
  ]
})
export class ComplainCategoryModule { }
