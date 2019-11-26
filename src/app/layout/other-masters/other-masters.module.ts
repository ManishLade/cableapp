import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OtherMastersRoutingModule } from './other-masters-routing.module';
import { OtherMastersComponent } from './other-masters.component';

@NgModule({
  declarations: [OtherMastersComponent],
  imports: [
    CommonModule,
    OtherMastersRoutingModule
  ]
})
export class OtherMastersModule { }
