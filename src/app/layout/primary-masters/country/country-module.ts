import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountryComponent } from './country.component';
import { PageHeaderModule } from '@app/shared';
import { CountryRoutingModule } from './country-routing-module';
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
import { UiSwitchModule } from 'ngx-ui-switch';

@NgModule({
    imports: [CommonModule, CountryRoutingModule , PageHeaderModule,
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
        UiSwitchModule,
        ReactiveFormsModule],
    declarations: [CountryComponent,
        AddDialogComponent,
        EditDialogComponent,
        DeleteDialogComponent],
    entryComponents: [
        AddDialogComponent,
        EditDialogComponent,
        DeleteDialogComponent        
      ],
    providers: [
            DataService
    ]
})
export class CountryModule {}
