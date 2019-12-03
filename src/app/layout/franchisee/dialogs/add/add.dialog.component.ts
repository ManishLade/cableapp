import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Franchisee } from '../../models/franchisee';
import { DataService } from '../../services/data.service';

@Component({
    selector: 'app-add.dialog',
    templateUrl: './add.dialog.html',
    styleUrls: ['./add.dialog.scss']
})
export class AddFranchiseeComponent implements OnInit {
    form = new FormGroup({
        businessname: new FormControl('', Validators.required),
        slogan: new FormControl('', Validators.required),
        addressline1: new FormControl('', Validators.required),
        addressline2: new FormControl('', Validators.required),
        addressline3: new FormControl('', Validators.required),
        country: new FormControl(0, Validators.required),
        state: new FormControl(0, Validators.required),
        zone: new FormControl(0, Validators.required),
        city: new FormControl(0, Validators.required),
        postcode: new FormControl('', Validators.required),
        email: new FormControl('', Validators.email),
        mobileno: new FormControl('', Validators.required),
        phoneno: new FormControl('', Validators.required),
        tinno: new FormControl('', Validators.required),
        panno: new FormControl('', Validators.required),
        servicetaxno: new FormControl('', Validators.required),
        entertainmenttaxno: new FormControl('', Validators.required),
        cstno: new FormControl('', Validators.required),
        website: new FormControl('', Validators.required),
        status: new FormControl(true),
        operatorname: new FormControl('', Validators.maxLength(256)),
        operatorcode: new FormControl('', Validators.maxLength(256)),
        areaofoperation: new FormControl('', Validators.required),
        gstno: new FormControl('', Validators.maxLength(256)),
        adharno: new FormControl('', Validators.maxLength(256)),
        documentsavepath: new FormControl('', Validators.required)
    });

    countries: { name: string; id: number; }[];
    zones: { name: string; id: number; }[];
    cities: { name: string; id: number; }[];
    states: { name: string; id: number; }[];
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
        const franchisee = new Franchisee();
        franchisee.Name = this.form.get('businessname').value;
        franchisee.Id = 0;
        franchisee.Status = this.form.get('status').value ? 1 : 0;
        const self = this;
        this.dataService.addFranchisee(franchisee).subscribe(
            data => {
                console.log(data);
                self.router.navigate(['/franchisee'], {
                    relativeTo: this.route
                });
            },
            error => {
            }
        );
    }

    onCancel() {
        this.router.navigate(['/franchisee'], {
            relativeTo: this.route
        });
    }
}
