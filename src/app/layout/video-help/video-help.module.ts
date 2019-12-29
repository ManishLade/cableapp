import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoHelpRoutingModule } from './video-help-routing.module';
import { VideoHelpComponent } from './video-help.component';

@NgModule({
  declarations: [VideoHelpComponent],
  imports: [
    CommonModule,
    VideoHelpRoutingModule
  ]
})
export class VideoHelpModule { }
