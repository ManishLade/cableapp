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
import { AddComplainCategoryComponent } from './dialogs/add/add.dialog.component';
import { DeleteDialogComponent } from './dialogs/delete/delete.dialog.component';
import { EditComplainCategoryComponent } from './dialogs/edit/edit.dialog.component';
import { ComplainCategory } from './models/complaincategory';
import { DataService } from './services/data.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
@Component({
    selector: 'app-complain-category',
    templateUrl: './complain-category.component.html',
    styleUrls: ['./complain-category.component.scss'],
    providers: [DataService],
    entryComponents: [AddComplainCategoryComponent, EditComplainCategoryComponent, DeleteDialogComponent]
})
export class ComplainCategoryComponent implements OnInit {
    constructor(
        public httpClient: HttpClient,
        public dialog: MatDialog,
        public dataService: DataService,
        private route: ActivatedRoute,
        private router: Router,
        private snackBar: MatSnackBar,
        private spinnerService: Ng4LoadingSpinnerService
    ) {}
    displayedColumns = ['Name', 'Created Date', 'Status', 'Edit', 'Delete'];
    exampleDatabase: DataService | null;
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

    addComplainCategory() {
        this.router.navigate(['/complain-category/add'], {
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
                self.dataService.deleteComplainCategory(row.Id).subscribe(res => {
                    if (res['Result']) {
                        const foundIndex = self.exampleDatabase.dataChange.value.findIndex(x => x.Name === row.Name);
                        // for delete we use splice in order to remove single object from DataService
                        self.exampleDatabase.dataChange.value.splice(foundIndex, 1);
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

    onEdit(index: number, complainCategory: ComplainCategory) {
        const navigationExtras: NavigationExtras = { state: complainCategory, relativeTo: this.route } as NavigationExtras;
        this.router.navigate(['/complain-category/edit'], navigationExtras);
    }

    private refreshTable() {
        // Refreshing table using paginator
        // Thanks yeager-j for tips
        // https://github.com/marinantonio/angular-mat-table-crud/complainCategorys/12
        this.paginator._changePageSize(this.paginator.pageSize);
    }

    public loadData() {
        this.exampleDatabase = new DataService(this.httpClient, this.spinnerService);
        this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator, this.sort);
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

export class ExampleDataSource extends DataSource<ComplainCategory> {
    _filterChange = new BehaviorSubject('');

    get filter(): string {
        return this._filterChange.value;
    }

    set filter(filter: string) {
        this._filterChange.next(filter);
    }

    filteredData: ComplainCategory[] = [];
    renderedData: ComplainCategory[] = [];

    constructor(public _exampleDatabase: DataService, public _paginator: MatPaginator, public _sort: MatSort) {
        super();
        // Reset to the first page when the user changes the filter.
        this._filterChange.subscribe(() => (this._paginator.pageIndex = 0));
    }

    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect(): Observable<ComplainCategory[]> {
        // Listen for any changes in the base data, sorting, filtering, or pagination
        const displayDataChanges = [this._exampleDatabase.dataChange, this._sort.sortChange, this._filterChange, this._paginator.page];

        this._exampleDatabase.getAllCountries();

        return merge(...displayDataChanges).pipe(
            map(() => {
                // Filter data
                this.filteredData = this._exampleDatabase.data.slice().filter((complainCategory: ComplainCategory) => {
                    const searchStr = (complainCategory.Name + complainCategory.Id).toLowerCase();
                    return searchStr.indexOf(this.filter.toLowerCase()) !== -1;
                });

                // Sort filtered data
                const sortedData = this.sortData(this.filteredData.slice());

                // Grab the page's slice of the filtered sorted data.
                const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
                this.renderedData = sortedData.splice(startIndex, this._paginator.pageSize);
                return this.renderedData;
            })
        );
    }

    disconnect() {}

    /** Returns a sorted copy of the database data. */
    sortData(data: ComplainCategory[]): ComplainCategory[] {
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
                // case 'state': [propertyA, propertyB] = [a.state, b.state]; break;
                // case 'url': [propertyA, propertyB] = [a.url, b.url]; break;
                // case 'created_at': [propertyA, propertyB] = [a.created_at, b.created_at]; break;
                // case 'updated_at': [propertyA, propertyB] = [a.updated_at, b.updated_at]; break;
            }

            const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
            const valueB = isNaN(+propertyB) ? propertyB : +propertyB;

            return (valueA < valueB ? -1 : 1) * (this._sort.direction === 'asc' ? 1 : -1);
        });
    }
}
