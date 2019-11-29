import { Component, OnInit } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { State } from '../../models/state';
import { StateDataService } from '../../services/data.service';
import { CountryDataService } from '@app/layout/primary-masters/country/services/data.service';
@Component({
    selector: 'app-baza.dialog',
    templateUrl: './edit.dialog.html',
    styleUrls: ['./edit.dialog.scss']
})
export class EditStateComponent implements OnInit {
    form = new FormGroup({
        name: new FormControl('', Validators.required),
        status: new FormControl(true),
        country: new FormControl(null, Validators.required)
    });

    state: State;
    countries: { name: string; id: number; }[];

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        public stateDataService: StateDataService,
        private countryDataService: CountryDataService,
        private router: Router
    ) {
        this.countryDataService.getAllCountries();
        this.countryDataService.dataChange.subscribe(res => {
            this.countries = res.map(x => {
               return { name: x.Name, id: x.Id };
            });
        });
        const navigation = this.router.getCurrentNavigation();
        this.state = navigation.extras.state as State;
    }

    get name() {
        return this.form.get('name');
    }

     // convenience getter for easy access to form fields
    get f() {
      return this.form.controls;
    }

    ngOnInit() {
      this.f.name.setValue(this.state.Name);
      this.f.country.setValue(this.state.CountryId);
      this.f.status.setValue(this.state.Status === 1 ? true : false);
    }

    onEdit() {
        this.state.Name = this.f.name.value;
        this.state.Status = this.form.get('status').value ? 1 : 0;
        this.state.CountryId = this.form.get('country').value;
        const self = this;
        this.stateDataService.updateState(this.state).subscribe(
            data => {
                console.log(data);
                self.router.navigate(['/state'], {
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
        this.router.navigate(['/state'], {
            relativeTo: this.route
        });
    }
}
