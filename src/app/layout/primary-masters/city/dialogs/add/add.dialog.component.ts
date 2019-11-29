import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { City } from '../../models/city';
import { CityDataService } from '../../services/data.service';
import { ZoneDataService } from '@app/layout/primary-masters/zone/services/data.service';

@Component({
    selector: 'app-add.dialog',
    templateUrl: './add.dialog.html',
    styleUrls: ['./add.dialog.scss']
})
export class AddCityComponent implements OnInit {
    form = new FormGroup({
        name: new FormControl('', Validators.required),
        status: new FormControl(true),
        zone: new FormControl('', Validators.required)
    });
    zones: { name: string; id: number; }[];
    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        public citydataService: CityDataService,
        private zoneDataService: ZoneDataService,
        private router: Router
    ) {
        this.zoneDataService.getAllZones();
        this.zoneDataService.dataChange.subscribe(res => {
            this.zones = res.map(x => {
               return { name: x.Name, id: x.Id };
            });
        });
    }

    get name() {
        return this.form.get('name');
    }
    ngOnInit() {}

    onSubmit() {
        const city = new City();
        city.Name = this.form.get('name').value;
        city.Id = 0;
        city.Status = this.form.get('status').value ? 1 : 0;
        city.ZoneId = this.form.get('zone').value;
        const self = this;
        this.citydataService.addCity(city).subscribe(
            data => {
                console.log(data);
                self.router.navigate(['/city'], {
                    relativeTo: this.route
                });
            },
            error => {
            }
        );
    }

    onCancel() {
        this.router.navigate(['/city'], {
            relativeTo: this.route
        });
    }
}
