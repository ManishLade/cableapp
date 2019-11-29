import { Component, OnInit } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Country } from '../../models/issue';
import { CountryDataService } from '../../services/data.service';
@Component({
    selector: 'app-baza.dialog',
    templateUrl: './edit.dialog.html',
    styleUrls: ['./edit.dialog.scss']
})
export class EditDialogComponent implements OnInit {
    form = new FormGroup({
        name: new FormControl('', Validators.required),
        status: new FormControl(true)
    });

    country: Country;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        public dataService: CountryDataService,
        private router: Router
    ) {
        const navigation = this.router.getCurrentNavigation();
        this.country = navigation.extras.state as Country;
    }

    get name() {
        return this.form.get('name');
    }

     // convenience getter for easy access to form fields
    get f() {
      return this.form.controls;
    }

    ngOnInit() {
      this.f.name.setValue(this.country.Name);
      this.f.status.setValue(this.country.Status === 1 ? true : false);
    }

    onEdit() {
        this.country.Name = this.f.name.value;
        const self = this;
        this.dataService.updateCountry(this.country).subscribe(
            data => {
                console.log(data);
                self.router.navigate(['/country'], {
                    relativeTo: this.route
                });
            },
            error => {
                // self.error = error;
                // self.loading = false;
            }
        );
    }

    onCancel() {
        this.router.navigate(['/country'], {
            relativeTo: this.route
        });
    }
}
