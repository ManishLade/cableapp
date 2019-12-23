import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Country } from '../../models/issue';
import { CountryDataService } from '../../services/data.service';
import { MatSnackBar } from '@angular/material';

@Component({
    selector: 'app-add.dialog',
    templateUrl: './add.dialog.html',
    styleUrls: ['./add.dialog.scss']
})
export class AddDialogComponent implements OnInit {
    alert: any;
    form = new FormGroup({
        name: new FormControl('', Validators.required),
        status: new FormControl(true)
    });
    error: any;
    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        public dataService: CountryDataService,
        private snackBar: MatSnackBar,
        private router: Router
    ) {
        this.alert = {
            id: 1,
            type: 'danger',
            message: 'Name already exists',
        };
    }

    public closeAlert(alert: any) {
        this.error = null;
    }

    get name() {
        return this.form.get('name');
    }
    ngOnInit() { }

    onSubmit() {
        const country = new Country();
        country.Name = this.form.get('name').value;
        country.Id = 0;
        country.Status = this.form.get('status').value ? 1 : 0;
        const self = this;
        this.dataService.addCountry(country).subscribe(
            data => {
                console.log(data);
                if (data['IsError']) {
                    self.error = data['ErrorMessage'];
                    return;
                }
                self.snackBar.open('Record saved succesfully', 'Save', {
                    duration: 2000
                });
                self.router.navigate(['/country'], {
                    relativeTo: this.route
                });
            },
            error => {
            }
        );
    }

    onCancel() {
        this.router.navigate(['/country'], {
            relativeTo: this.route
        });
    }
}
