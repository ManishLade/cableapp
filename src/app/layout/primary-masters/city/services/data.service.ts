import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { City } from '../models/city';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Injectable({
    providedIn: 'root'
})
export class CityDataService {
    private readonly API_URL = 'app/api/city.data.json';

    dataChange: BehaviorSubject<City[]> = new BehaviorSubject<City[]>([]);
    // Temporarily stores data from dialogs
    dialogData: any;

    constructor(
        private httpClient: HttpClient,
        private spinnerService: Ng4LoadingSpinnerService
    ) {}

    get data(): City[] {
        return this.dataChange.value;
    }

    getDialogData() {
        return this.dialogData;
    }

    /** CRUD METHODS */
    getAllCities(): void {
        this.spinnerService.show();

        this.httpClient
            .get<City[]>(`${environment.apiUrl}/api/City`, {
                responseType: 'json'
            })
            .subscribe(
                data => {
                    this.spinnerService.hide();
                    this.dataChange.next(data['Result']);
                },
                (error: HttpErrorResponse) => {
                    this.spinnerService.hide();
                    console.log(error.name + ' ' + error.message);
                }
            );
    }

    getCitiesByZoneId(zoneId): void {
        this.spinnerService.show();

        this.httpClient
            .get<City[]>(`${environment.apiUrl}/api/zone/${zoneId}/cities`, {
                responseType: 'json'
            })
            .subscribe(
                data => {
                    this.spinnerService.hide();
                    this.dataChange.next(data['Result']);
                },
                (error: HttpErrorResponse) => {
                    this.spinnerService.hide();
                    console.log(error.name + ' ' + error.message);
                }
            );
    }

    // DEMO ONLY, you can find working methods below
    addCity(city: City) {
        this.spinnerService.show();
        return this.httpClient
            .post(`${environment.apiUrl}/api/City`, city)
            .pipe(
                map(res => {
                    this.spinnerService.hide();
                    return res;
                })
            );
    }

    deleteCity(cityId: number) {
        this.spinnerService.show();
        return this.httpClient
            .delete(`${environment.apiUrl}/api/City/${cityId}`)
            .pipe(
                map(res => {
                    this.spinnerService.hide();
                    return res;
                })
            );
    }

    updateCity(city: City) {
        this.spinnerService.show();
        return this.httpClient
            .put(`${environment.apiUrl}/api/City`, city)
            .pipe(
                map(res => {
                    this.spinnerService.hide();
                    return res;
                })
            );
    }
}

/* REAL LIFE CRUD Methods I've used in my projects. ToasterService uses Material Toasts for displaying messages:

    // ADD, POST METHOD
    addItem(kanbanItem: KanbanItem): void {
    this.httpClient.post(this.API_URL, kanbanItem).subscribe(data => {
      this.dialogData = kanbanItem;
      this.toasterService.showToaster('Successfully added', 3000);
      },
      (err: HttpErrorResponse) => {
      this.toasterService.showToaster('Error occurred. Details: ' + err.name + ' ' + err.message, 8000);
    });
   }

    // UPDATE, PUT METHOD
     updateItem(kanbanItem: KanbanItem): void {
    this.httpClient.put(this.API_URL + kanbanItem.id, kanbanItem).subscribe(data => {
        this.dialogData = kanbanItem;
        this.toasterService.showToaster('Successfully edited', 3000);
      },
      (err: HttpErrorResponse) => {
        this.toasterService.showToaster('Error occurred. Details: ' + err.name + ' ' + err.message, 8000);
      }
    );
  }

  // DELETE METHOD
  deleteItem(id: number): void {
    this.httpClient.delete(this.API_URL + id).subscribe(data => {
      console.log(data['']);
        this.toasterService.showToaster('Successfully deleted', 3000);
      },
      (err: HttpErrorResponse) => {
        this.toasterService.showToaster('Error occurred. Details: ' + err.name + ' ' + err.message, 8000);
      }
    );
  }
*/
