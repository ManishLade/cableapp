import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrimaryMastersRoutingModule } from './primary-master-routing.module';
import { PrimaryMasterComponent } from './primary-master.component';


@NgModule({
  imports: [CommonModule,
    PrimaryMastersRoutingModule
  ],
  declarations: [PrimaryMasterComponent]
})
export class PrimaryMasterModule { }
