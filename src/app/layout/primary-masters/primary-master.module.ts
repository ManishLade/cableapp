import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaryMastersRoutingModule } from './primary-master-routing.module';
import { PrimaryMasterComponent } from './primary-master.component';
import { CountryComponent } from './country/country.component';

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

import {AddDialogComponent} from './country/dialogs/add/add.dialog.component';
import {EditDialogComponent} from './country/dialogs/edit/edit.dialog.component';
import {DeleteDialogComponent} from './country/dialogs/delete/delete.dialog.component';
import {BehaviorSubject, fromEvent, merge, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { DataService } from './country/services/data.service';


@NgModule({
    imports: [CommonModule, 
        PrimaryMastersRoutingModule,
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
        ReactiveFormsModule],
    declarations: [PrimaryMasterComponent, CountryComponent,
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
export class PrimaryMasterModule {}
