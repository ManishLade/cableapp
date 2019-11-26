import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChannelCategoryRoutingModule } from './channel-category-routing.module';
import { ChannelCategoryComponent } from './channel-category.component';

@NgModule({
  declarations: [ChannelCategoryComponent],
  imports: [
    CommonModule,
    ChannelCategoryRoutingModule
  ]
})
export class ChannelCategoryModule { }
