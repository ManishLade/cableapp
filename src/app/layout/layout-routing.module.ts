import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

let defaultRoute = 'dashboard';
const user = JSON.parse(localStorage.getItem('currentUser'));
const role = user ? user.role : '';

if (role === 'Owner') {
    // superadmin role
    defaultRoute = 'dashboard';
} else if (role === 'User') {
    // normal user role
    defaultRoute = 'userdashboard';
}

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent, pathMatch: 'prefix',
        children: [
            { path: '', redirectTo: defaultRoute, pathMatch: 'prefix' },
            { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
            { path: 'userdashboard', loadChildren: () => import('./userdashboard/userdashboard.module').then(m => m.UserdashboardModule) },
            { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
            { path: 'items', loadChildren: () => import('./items/item.module').then(m => m.ItemModule) },
            { path: 'role', loadChildren: () => import('./role/role.module').then(m => m.RoleModule) },
            {
                path: 'manage-channel-group',
                loadChildren: () => import('./manage-channel-group/manage-channel-group.module').then(m => m.ManageChannelGroupModule)
            },
            { path: 'usergroup', loadChildren: () => import('./primary-masters/usergroup/usergroup.module').then(m => m.UsergroupModule) },
            { path: 'channel', loadChildren: () => import('./manage-package/channel/channel.module').then(m => m.ChannelModule) },
            { path: 'package', loadChildren: () => import('./manage-package/package/package.module').then(m => m.PackageModule) },
            { path: 'manage-agents', loadChildren: () => import('./manage-agents/manage-agents.module').then(m => m.ManageAgentsModule) },
            { path: 'kits', loadChildren: () => import('./kits/kits.module').then(m => m.KitsModule) },
            {
                path: 'prepaid-subscriber',
                loadChildren: () => import('./prepaid-subscriber/prepaid-subscriber.module').then(m => m.PrepaidSubscriberModule)
            },
            { path: 'company', loadChildren: () => import('./company/company.module').then(m => m.CompanyModule) },
            { path: 'charges', loadChildren: () => import('./other-masters/charges/charges.module').then(m => m.ChargesModule) },
            {
                path: 'document-type',
                loadChildren: () => import('./other-masters/document-type/document-type.module').then(m => m.DocumentTypeModule)
            },
            { path: 'supplier', loadChildren: () => import('./other-masters/supplier/supplier.module').then(m => m.SupplierModule) },
            {
                path: 'cas-provider-setting',
                loadChildren: () =>
                    import('./other-masters/cas-provider-setting/cas-provider-setting.module').then(m => m.CasProviderSettingModule)
            },
            {
                path: 'channel-category',
                loadChildren: () => import('./other-masters/channel-category/channel-category.module').then(m => m.ChannelCategoryModule)
            },
            {
                path: 'complain-category',
                loadChildren: () => import('./other-masters/complain-category/complain-category.module').then(m => m.ComplainCategoryModule)
            },
            { path: 'country', loadChildren: () => import('./primary-masters/country/country-module').then(m => m.CountryModule) },
            { path: 'state', loadChildren: () => import('./primary-masters/state/state.module').then(m => m.StateModule) },
            { path: 'city', loadChildren: () => import('./primary-masters/city/city.module').then(m => m.CityModule) },
            { path: 'area', loadChildren: () => import('./primary-masters/area/area.module').then(m => m.AreaModule) },
            { path: 'zone', loadChildren: () => import('./primary-masters/zone/zone.module').then(m => m.ZoneModule) },
            {
                path: 'item-opening',
                loadChildren: () => import('./manage-item/item-opening/item-opening.module').then(m => m.ItemOpeningModule)
            },
            {
                path: 'device-pairing',
                loadChildren: () => import('./manage-item/device-pairing/device-pairing.module').then(m => m.DevicePairingModule)
            },
            { path: 'franchisee', loadChildren: () => import('./franchisee/franchisee.module').then(m => m.FranchiseeModule) },
            { path: 'video-help', loadChildren: () => import('./video-help/video-help.module').then(m => m.VideoHelpModule) },
            {
                path: 'franchisee-message',
                loadChildren: () => import('./franchisee-message/franchisee-message.module').then(m => m.FranchiseeMessageModule)
            },
            {
                path: 'cas-log-report',
                loadChildren: () => import('./cas-log-report/cas-log-report.module').then(m => m.CasLogReportModule)
            },
            {
                path: 'cas-bulkuploadstatus',
                loadChildren: () => import('./cas-bulkuploadstatus/cas-bulkuploadstatus.module').then(m => m.CasBulkuploadstatusModule)
            },
            {
                path: 'cas-notification',
                loadChildren: () => import('./cas-notification/cas-notification.module').then(m => m.CasNotificationModule)
            },
            {
                path: 'subscriber-master',
                loadChildren: () => import('./manage-subscriber/subscriber-master/subscriber-master.module').then(m => m.SubscriberMasterModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
