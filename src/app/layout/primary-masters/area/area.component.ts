import { DataSource } from '@angular/cdk/collections';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { BehaviorSubject, fromEvent, merge, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AddAreaComponent } from './dialogs/add/add.dialog.component';
import { DeleteDialogComponent } from './dialogs/delete/delete.dialog.component';
import { EditAreaComponent } from './dialogs/edit/edit.dialog.component';
import { Area } from './models/area';
import { AreaDataService } from './services/data.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
@Component({
    selector: 'app-area',
    templateUrl: './area.component.html',
    styleUrls: ['./area.component.scss'],
    providers: [AreaDataService],
    entryComponents: [
        AddAreaComponent,
        EditAreaComponent,
        DeleteDialogComponent
    ]
})
export class AreaComponent implements OnInit {
    constructor(
        public httpClient: HttpClient,
        public dialog: MatDialog,
        public dataService: AreaDataService,
        private route: ActivatedRoute,
        private router: Router,
        private snackBar: MatSnackBar,
        private spinnerService: Ng4LoadingSpinnerService
    ) {}
    displayedColumns = ['Name', 'City', 'Created Date', 'Status', 'Edit', 'Delete'];
    exampleDatabase: AreaDataService | null;
    dataSource: ExampleDataSource | null;
    index: number;
    id: number;
    name: string;

    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    @ViewChild(MatSort, { static: true }) sort: MatSort;
    @ViewChild('filter', { static: true }) filter: ElementRef;

    closeResult: string;

    ngOnInit() {
        this.loadData();
    }

    refresh() {
        this.loadData();
    }

    addArea() {
        this.router.navigate(['/area/add'], {
            relativeTo: this.route
        });
    }

    deleteItem(i: number, row: any) {
        this.index = i;
        this.name = 'id';

        const dialogRef = this.dialog.open(DeleteDialogComponent, {
            data: {
                message: 'Are you sure want to delete?',
                buttonText: {
                    ok: 'Yes',
                    cancel: 'No'
                }
            }
        });
        const snack = this.snackBar.open('Deleting');
        const self = this;
        dialogRef.afterClosed().subscribe((confirmed: boolean) => {
            if (confirmed) {
                self.dataService.deleteArea(row.Id).subscribe(res => {
                    if (res['Result']) {
                        const foundIndex = self.exampleDatabase.dataChange.value.findIndex(
                            x => x.Name === row.Name
                        );
                        // for delete we use splice in order to remove single object from DataService
                        self.exampleDatabase.dataChange.value.splice(
                            foundIndex,
                            1
                        );
                        self.refreshTable();

                        snack.dismiss();
                        const a = document.createElement('a');
                        a.click();
                        a.remove();
                        snack.dismiss();
                        self.snackBar.open('Record', 'Delete', {
                            duration: 2000
                        });
                    }
                });
            }
        });
    }

    onEdit(index: number, area: Area) {
      const navigationExtras: NavigationExtras = { state: area, relativeTo: this.route } as NavigationExtras;
      this.router.navigate(['/area/edit'], navigationExtras);
    }

    private refreshTable() {
        // Refreshing table using paginator
        // Thanks yeager-j for tips
        // https://github.com/marinantonio/angular-mat-table-crud/areas/12
        this.paginator._changePageSize(this.paginator.pageSize);
    }

    public loadData() {
        this.exampleDatabase = new AreaDataService(this.httpClient, this.spinnerService);
        this.dataSource = new ExampleDataSource(
            this.exampleDatabase,
            this.paginator,
            this.sort
        );
        fromEvent(this.filter.nativeElement, 'keyup')
            // .debounceTime(150)
            // .distinctUntilChanged()
            .subscribe(() => {
                if (!this.dataSource) {
                    return;
                }
                this.dataSource.filter = this.filter.nativeElement.value;
            });
    }
}

export class ExampleDataSource extends DataSource<Area> {
    _filterChange = new BehaviorSubject('');

    get filter(): string {
        return this._filterChange.value;
    }

    set filter(filter: string) {
        this._filterChange.next(filter);
    }

    filteredData: Area[] = [];
    renderedData: Area[] = [];

    constructor(
        public _exampleDatabase: AreaDataService,
        public _paginator: MatPaginator,
        public _sort: MatSort
    ) {
        super();
        // Reset to the first page when the user changes the filter.
        this._filterChange.subscribe(() => (this._paginator.pageIndex = 0));
    }

    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect(): Observable<Area[]> {
        // Listen for any changes in the base data, sorting, filtering, or pagination
        const displayDataChanges = [
            this._exampleDatabase.dataChange,
            this._sort.sortChange,
            this._filterChange,
            this._paginator.page
        ];

        this._exampleDatabase.getAllCountries();

        return merge(...displayDataChanges).pipe(
            map(() => {
                // Filter data
                this.filteredData = this._exampleDatabase.data
                    .slice()
                    .filter((area: Area) => {
                        const searchStr = (
                            area.Name + area.Id
                        ).toLowerCase();
                        return (
                            searchStr.indexOf(this.filter.toLowerCase()) !== -1
                        );
                    });

                // Sort filtered data
                const sortedData = this.sortData(this.filteredData.slice());

                // Grab the page's slice of the filtered sorted data.
                const startIndex =
                    this._paginator.pageIndex * this._paginator.pageSize;
                this.renderedData = sortedData.splice(
                    startIndex,
                    this._paginator.pageSize
                );
                return this.renderedData;
            })
        );
    }

    disconnect() {}

    /** Returns a sorted copy of the database data. */
    sortData(data: Area[]): Area[] {
        if (!this._sort.active || this._sort.direction === '') {
            return data;
        }

        return data.sort((a, b) => {
            let propertyA: number | string = '';
            let propertyB: number | string = '';

            switch (this._sort.active) {
                case 'name':
                    [propertyA, propertyB] = [a.Name, b.Name];
                    break;
                case 'id':
                    [propertyA, propertyB] = [a.Id, b.Id];
                    break;
                // case 'id': [propertyA, propertyB] = [a.id, b.id]; break;
                // case 'title': [propertyA, propertyB] = [a.title, b.title]; break;
                // case 'area': [propertyA, propertyB] = [a.area, b.area]; break;
                // case 'url': [propertyA, propertyB] = [a.url, b.url]; break;
                // case 'created_at': [propertyA, propertyB] = [a.created_at, b.created_at]; break;
                // case 'updated_at': [propertyA, propertyB] = [a.updated_at, b.updated_at]; break;
            }

            const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
            const valueB = isNaN(+propertyB) ? propertyB : +propertyB;

            return (
                (valueA < valueB ? -1 : 1) *
                (this._sort.direction === 'asc' ? 1 : -1)
            );
        });
    }
}
