import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentTypeRoutingModule } from './document-type-routing.module';
import { DocumentTypeComponent } from './document-type.component';

@NgModule({
  declarations: [DocumentTypeComponent],
  imports: [
    CommonModule,
    DocumentTypeRoutingModule
  ]
})
export class DocumentTypeModule { }
