import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoleComponent } from './role.component';
import { PageHeaderModule } from '@app/shared';
import { RoleRoutingModule } from './role-routing.module';
import { DeleteDialogComponent } from './dialogs/delete/delete.dialog.component';
import { AddDialogComponent } from './dialogs/add/add.dialog.component';
import { EditDialogComponent } from './dialogs/edit/edit.dialog.component';
import { DataService } from './services/data.service';

import {HttpClientModule} from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { httpInterceptorProviders } from '@app/shared/interceptor';
import { MatSnackBarModule } from '@angular/material';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { SwitchModule } from '@app/shared/modules/switch/switch.module';
@NgModule({
    imports: [CommonModule, RoleRoutingModule , PageHeaderModule,
        HttpClientModule,
        MatDialogModule,
        FormsModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule,
        MatSortModule,
        MatTableModule,
        MatToolbarModule,
        MatPaginatorModule,
        MatSnackBarModule,
        SwitchModule,
        NgbModule,
        Ng4LoadingSpinnerModule.forRoot(),
        ReactiveFormsModule],
    declarations: [RoleComponent,
        AddDialogComponent,
        EditDialogComponent,
        DeleteDialogComponent],
    entryComponents: [
        AddDialogComponent,
        EditDialogComponent,
        DeleteDialogComponent
      ],
    providers: [
            DataService, httpInterceptorProviders
    ]
})
export class RoleModule { }
