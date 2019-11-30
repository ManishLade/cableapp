import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Area } from '../../models/area';
import { AreaDataService } from '../../services/data.service';
import { CityDataService } from '@app/layout/primary-masters/city/services/data.service';

@Component({
    selector: 'app-add.dialog',
    templateUrl: './add.dialog.html',
    styleUrls: ['./add.dialog.scss']
})
export class AddAreaComponent implements OnInit {
    form = new FormGroup({
        name: new FormControl('', Validators.required),
        status: new FormControl(true),
        city: new FormControl(0, Validators.required),
    });
    cities: { name: string; id: number; }[];
    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        public areaDataService: AreaDataService,
        private cityDataService: CityDataService,
        private router: Router
    ) {
        this.cityDataService.getAllCities();
        this.cityDataService.dataChange.subscribe(res => {
            this.cities = res.map(x => {
               return { name: x.Name, id: x.Id };
            });
        });
    }

    get name() {
        return this.form.get('name');
    }
    ngOnInit() {}

    onSubmit() {
        const area = new Area();
        area.Name = this.form.get('name').value;
        area.Id = 0;
        area.Status = this.form.get('status').value ? 1 : 0;
        area.CityId = this.form.get('city').value;
        const self = this;
        this.areaDataService.addArea(area).subscribe(
            data => {
                console.log(data);
                self.router.navigate(['/area'], {
                    relativeTo: this.route
                });
            },
            error => {
            }
        );
    }

    onCancel() {
        this.router.navigate(['/area'], {
            relativeTo: this.route
        });
    }
}
