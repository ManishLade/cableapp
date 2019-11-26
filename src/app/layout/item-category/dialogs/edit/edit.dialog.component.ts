import { Component, OnInit } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemCategory } from '../../models/ItemCategory';
import { DataService } from '../../services/data.service';
@Component({
    selector: 'app-baza.dialog',
    templateUrl: './edit.dialog.html',
    styleUrls: ['./edit.dialog.scss']
})
export class EditItemCategoryComponent implements OnInit {
    form = new FormGroup({
        name: new FormControl('', Validators.required),
        status: new FormControl(true)
    });

    itemCategory: ItemCategory;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        public dataService: DataService,
        private router: Router
    ) {
        const navigation = this.router.getCurrentNavigation();
        this.itemCategory = navigation.extras.state as ItemCategory;
    }

    get name() {
        return this.form.get('name');
    }

     // convenience getter for easy access to form fields
    get f() {
      return this.form.controls;
    }

    ngOnInit() {
      this.f.name.setValue(this.itemCategory.Name);
      this.f.status.setValue(this.itemCategory.Status === 1 ? true : false);
    }

    onEdit() {
        this.itemCategory.Name = this.f.name.value;
        const self = this;
        this.dataService.updateItemCategory(this.itemCategory).subscribe(
            data => {
                console.log(data);
                self.router.navigate(['/item-category'], {
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
        this.router.navigate(['/item-category'], {
            relativeTo: this.route
        });
    }
}
