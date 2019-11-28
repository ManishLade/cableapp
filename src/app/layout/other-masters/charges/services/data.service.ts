import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Charge } from '../models/charges';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    private readonly API_URL = 'app/api/Charge.data.json';

    dataChange: BehaviorSubject<Charge[]> = new BehaviorSubject<Charge[]>([]);
    // Temporarily stores data from dialogs
    dialogData: any;

    constructor(
        private httpClient: HttpClient,
        private spinnerService: Ng4LoadingSpinnerService
    ) {}

    get data(): Charge[] {
        return this.dataChange.value;
    }

    getDialogData() {
        return this.dialogData;
    }

    /** CRUD METHODS */
    getAllCharges(): void {
        this.spinnerService.show();
        this.httpClient
            .get<Charge[]>(`${environment.apiUrl}/api/Charge`, {
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
    addCharge(charges: Charge) {
        this.spinnerService.show();
        return this.httpClient
            .post(`${environment.apiUrl}/api/Charge`, charges)
            .pipe(
                map(res => {
                    this.spinnerService.hide();
                    return res;
                })
            );
    }

    deleteCharge(chargesId: number) {
        this.spinnerService.show();
        return this.httpClient
            .delete(`${environment.apiUrl}/api/Charge/${chargesId}`)
            .pipe(
                map(res => {
                    this.spinnerService.hide();
                    return res;
                })
            );
    }

    updateCharge(charges: Charge) {
        this.spinnerService.show();
        return this.httpClient
            .put(`${environment.apiUrl}/api/Charge`, charges)
            .pipe(
                map(res => {
                    this.spinnerService.hide();
                    return res;
                })
            );
    }
}
