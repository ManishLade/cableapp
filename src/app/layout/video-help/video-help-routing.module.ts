import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoHelpComponent } from './video-help.component';

const routes: Routes = [
  {
      path: '',
      component: VideoHelpComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideoHelpRoutingModule { }
