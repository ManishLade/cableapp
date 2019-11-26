import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'charges', loadChildren: () => import('./charges/charges.module').then(m => m.ChargesModule) },
  { path: 'document-type', loadChildren: () => import('./document-type/document-type.module').then(m => m.DocumentTypeModule) },
  { path: 'supplier', loadChildren: () => import('./supplier/supplier.module').then(m => m.SupplierModule) },
  { path: 'cas-provider-setting', loadChildren:
      () => import('./cas-provider-setting/cas-provider-setting.module').then(m => m.CasProviderSettingModule) },
  { path: 'channel-category', loadChildren:
      () => import('./channel-category/channel-category.module').then(m => m.ChannelCategoryModule) },
  { path: 'complain-category', loadChildren:
      () => import('./complain-category/complain-category.module').then(m => m.ComplainCategoryModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtherMastersRoutingModule { }
