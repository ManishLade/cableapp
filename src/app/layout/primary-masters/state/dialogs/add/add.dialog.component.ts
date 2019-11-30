import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { State } from '../../models/state';
import { StateDataService } from '../../services/data.service';
import { CountryDataService } from '@app/layout/primary-masters/country/services/data.service';
import { Country } from '@app/layout/primary-masters/country/models/issue';

@Component({
    selector: 'app-add.dialog',
    templateUrl: './add.dialog.html',
    styleUrls: ['./add.dialog.scss']
})
export class AddStateComponent implements OnInit {

    countries: any;

    form = new FormGroup({
        name: new FormControl('', Validators.required),
        status: new FormControl(true),
        country: new FormControl(0, Validators.required)
       });
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
    }

    get name() {
        return this.form.get('name');
    }

    ngOnInit() {}

    onSubmit() {
        const state = new State();
        state.Name = this.form.get('name').value;
        state.Id = 0;
        state.Status = this.form.get('status').value ? 1 : 0;
        state.CountryId = this.form.get('country').value;
        const self = this;
        this.stateDataService.addState(state).subscribe(
            data => {
                console.log(data);
                self.router.navigate(['/state'], {
                    relativeTo: this.route
                });
            },
            error => {
            }
        );
    }

    onCancel() {
        this.router.navigate(['/state'], {
            relativeTo: this.route
        });
    }
}
