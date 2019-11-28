import { Component, OnInit } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Area } from '../../models/area';
import { DataService } from '../../services/data.service';
@Component({
    selector: 'app-baza.dialog',
    templateUrl: './edit.dialog.html',
    styleUrls: ['./edit.dialog.scss']
})
export class EditAreaComponent implements OnInit {
    form = new FormGroup({
        name: new FormControl('', Validators.required),
        status: new FormControl(true)
    });

    area: Area;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        public dataService: DataService,
        private router: Router
    ) {
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
        const self = this;
        this.dataService.updateArea(this.area).subscribe(
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
