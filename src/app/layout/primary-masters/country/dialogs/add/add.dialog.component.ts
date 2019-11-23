import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Country } from '../../models/issue';
import { DataService } from '../../services/data.service';

@Component({
    selector: 'app-add.dialog',
    templateUrl: './add.dialog.html',
    styleUrls: ['./add.dialog.scss']
})
export class AddDialogComponent implements OnInit {
    form = new FormGroup({
        name: new FormControl('', Validators.required),
        status: new FormControl(false)
    });
    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        public dataService: DataService,
        private router: Router
    ) {}

    get name() {
        return this.form.get('name');
    }
    ngOnInit() {}

    onSubmit() {
        const country = new Country();
        country.Name = this.form.get('name').value;
        country.Id = 0;
        country.Status = 1;
        const self = this;
        this.dataService.addCountry(country).subscribe(
            data => {
                console.log(data);
                self.router.navigate(['/primary-masters/country'], {
                    relativeTo: this.route
                });
            },
            error => {
            }
        );
    }

    onCancel() {
        this.router.navigate(['/primary-masters/country'], {
            relativeTo: this.route
        });
    }
}
