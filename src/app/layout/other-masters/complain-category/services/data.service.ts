import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { ComplainCategory } from '../models/complaincategory';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    private readonly API_URL = 'app/api/complainCategory.data.json';

    dataChange: BehaviorSubject<ComplainCategory[]> = new BehaviorSubject<ComplainCategory[]>([]);
    // Temporarily stores data from dialogs
    dialogData: any;

    constructor(
        private httpClient: HttpClient,
        private spinnerService: Ng4LoadingSpinnerService
    ) {}

    get data(): ComplainCategory[] {
        return this.dataChange.value;
    }

    getDialogData() {
        return this.dialogData;
    }

    /** CRUD METHODS */
    getAllCountries(): void {
        this.spinnerService.show();
        this.httpClient
            .get<ComplainCategory[]>(`${environment.apiUrl}/api/ComplainCategory`, {
                responseType: 'json'
            })
            .subscribe(
                data => {
                    this.spinnerService.hide();
                    this.dataChange.next(data['Result']);
                },
                (error: HttpErrorResponse) => {
                    console.log(error.name + ' ' + error.message);
                }
            );
    }

    // DEMO ONLY, you can find working methods below
    addComplainCategory(complainCategory: ComplainCategory) {
        this.spinnerService.show();
        return this.httpClient
            .post(`${environment.apiUrl}/api/ComplainCategory`, complainCategory)
            .pipe(
                map(res => {
                    this.spinnerService.hide();
                    return res;
                })
            );
    }

    deleteComplainCategory(complainCategoryId: number) {
        this.spinnerService.show();
        return this.httpClient
            .delete(`${environment.apiUrl}/api/ComplainCategory/${complainCategoryId}`)
            .pipe(
                map(res => {
                    this.spinnerService.hide();
                    return res;
                })
            );
    }

    updateComplainCategory(complainCategory: ComplainCategory) {
        this.spinnerService.show();
        return this.httpClient
            .put(`${environment.apiUrl}/api/ComplainCategory`, complainCategory)
            .pipe(
                map(res => {
                    this.spinnerService.hide();
                    return res;
                })
            );
    }
}
