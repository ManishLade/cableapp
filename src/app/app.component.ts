import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
    constructor() {
    }

    ngOnInit() {
    }

    ngOnDestroy() {
        alert('KKk');
        localStorage.removeItem('jwt');
    }

    @HostListener('window:onbeforeunload', ['$event'])
    clearLocalStorage(event) {
        alert('KKk');
        localStorage.clear();
    }
}
