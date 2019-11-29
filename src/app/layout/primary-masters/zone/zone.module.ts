import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZoneComponent } from './zone.component';
import { PageHeaderModule } from '@app/shared';
import { ZoneRoutingModule } from './zone-routing.module';
import { DeleteDialogComponent } from './dialogs/delete/delete.dialog.component';
import { AddZoneComponent } from './dialogs/add/add.dialog.component';
import { EditZoneComponent } from './dialogs/edit/edit.dialog.component';
import { ZoneDataService } from './services/data.service';

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
import { SwitchComponent } from '@app/shared/modules/switch/switch.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { httpInterceptorProviders } from '@app/shared/interceptor';
import { MatSnackBarModule } from '@angular/material';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { SwitchModule } from '@app/shared/modules/switch/switch.module';
@NgModule({
    imports: [CommonModule, ZoneRoutingModule , PageHeaderModule,
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
        NgbModule,
        SwitchModule,
        Ng4LoadingSpinnerModule.forRoot(),
        ReactiveFormsModule],
    declarations: [ZoneComponent,
        AddZoneComponent,
        EditZoneComponent,
        DeleteDialogComponent],
    entryComponents: [
        AddZoneComponent,
        EditZoneComponent,
        DeleteDialogComponent
      ],
    providers: [
            ZoneDataService, httpInterceptorProviders
    ]
})
export class ZoneModule {}
