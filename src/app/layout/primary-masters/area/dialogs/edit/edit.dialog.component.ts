import { Component, OnInit } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Area } from '../../models/area';
import { AreaDataService } from '../../services/data.service';
import { CityDataService } from '@app/layout/primary-masters/city/services/data.service';
@Component({
    selector: 'app-baza.dialog',
    templateUrl: './edit.dialog.html',
    styleUrls: ['./edit.dialog.scss']
})
export class EditAreaComponent implements OnInit {
    form = new FormGroup({
        name: new FormControl('', Validators.required),
        status: new FormControl(true),
        city: new FormControl('', Validators.required),
    });

    area: Area;
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
        const navigation = this.router.getCurrentNavigation();
        this.area = navigation.extras.state as Area;
    }

    get name() {
        return this.form.get('name');
    }

     // convenience getter for easy access to form fields
    get f() {
      return this.form.controls;
    }

    ngOnInit() {
      this.f.name.setValue(this.area.Name);
      this.f.status.setValue(this.area.Status === 1 ? true : false);
    }

    onEdit() {
        this.area.Name = this.f.name.value;
        this.area.Status = this.form.get('status').value ? 1 : 0;
        this.area.CityId = this.form.get('city').value;
        const self = this;
        this.areaDataService.updateArea(this.area).subscribe(
            data => {
                console.log(data);
                self.router.navigate(['/area'], {
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
        this.router.navigate(['/area'], {
            relativeTo: this.route
        });
    }
}
