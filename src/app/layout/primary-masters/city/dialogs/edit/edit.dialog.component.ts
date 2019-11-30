import { Component, OnInit } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { City } from '../../models/city';
import { CityDataService } from '../../services/data.service';
import { ZoneDataService } from '@app/layout/primary-masters/zone/services/data.service';
@Component({
    selector: 'app-baza.dialog',
    templateUrl: './edit.dialog.html',
    styleUrls: ['./edit.dialog.scss']
})
export class EditCityComponent implements OnInit {
    form = new FormGroup({
        name: new FormControl('', Validators.required),
        status: new FormControl(true),
        zone: new FormControl('', Validators.required)
    });

    city: City;
    zones: { name: string; id: number; }[];

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        public cityDataService: CityDataService,
        private zoneDataService: ZoneDataService,
        private router: Router
    ) {
        this.zoneDataService.getAllZones();
        this.zoneDataService.dataChange.subscribe(res => {
            this.zones = res.map(x => {
               return { name: x.Name, id: x.Id };
            });
        });
        const navigation = this.router.getCurrentNavigation();
        this.city = navigation.extras.state as City;
    }

    get name() {
        return this.form.get('name');
    }

     // convenience getter for easy access to form fields
    get f() {
      return this.form.controls;
    }

    ngOnInit() {
      this.f.name.setValue(this.city.Name);
      this.form.get('zone').setValue(this.city.ZoneId);
      this.f.status.setValue(this.city.Status === 1 ? true : false);
    }

    onEdit() {
        this.city.Name = this.f.name.value;
        this.city.Status = this.form.get('status').value ? 1 : 0;
        this.city.ZoneId = this.form.get('zone').value;
        const self = this;
        this.cityDataService.updateCity(this.city).subscribe(
            data => {
                console.log(data);
                self.router.navigate(['/city'], {
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
        this.router.navigate(['/city'], {
            relativeTo: this.route
        });
    }
}
