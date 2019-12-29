import { Component, OnInit } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../../models/Item';
import { ItemDataService } from '../../services/data.service';
@Component({
    selector: 'app-baza.dialog',
    templateUrl: './edit.dialog.html',
    styleUrls: ['./edit.dialog.scss']
})
export class EditItemComponent implements OnInit {
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


    item: Item;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        public dataService: ItemDataService,
        private router: Router
    ) {
        const navigation = this.router.getCurrentNavigation();
        this.item = navigation.extras.state as Item;
    }

    get name() {
        return this.form.get('name');
    }

     // convenience getter for easy access to form fields
    get f() {
      return this.form.controls;
    }

    ngOnInit() {
      this.f.businessname.setValue(this.item.BusinessName);
      this.f.status.setValue(this.item.Status === 1 ? true : false);
    }

    onEdit() {
        this.item.BusinessName = this.f.BusinessName.value;
        const self = this;
        this.dataService.updateItem(this.item).subscribe(
            data => {
                console.log(data);
                self.router.navigate(['/item'], {
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
        this.router.navigate(['/item'], {
            relativeTo: this.route
        });
    }
}
