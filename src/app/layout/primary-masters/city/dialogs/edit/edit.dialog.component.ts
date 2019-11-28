import { Component, OnInit } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { City } from '../../models/city';
import { DataService } from '../../services/data.service';
@Component({
    selector: 'app-baza.dialog',
    templateUrl: './edit.dialog.html',
    styleUrls: ['./edit.dialog.scss']
})
export class EditCityComponent implements OnInit {
    form = new FormGroup({
        name: new FormControl('', Validators.required),
        status: new FormControl(true)
    });

    city: City;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        public dataService: DataService,
        private router: Router
    ) {
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
      this.f.status.setValue(this.city.Status === 1 ? true : false);
    }

    onEdit() {
        this.city.Name = this.f.name.value;
        const self = this;
        this.dataService.updateCity(this.city).subscribe(
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
