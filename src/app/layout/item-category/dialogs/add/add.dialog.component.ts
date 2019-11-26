import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemCategory } from '../../models/ItemCategory';
import { DataService } from '../../services/data.service';

@Component({
    selector: 'app-add.dialog',
    templateUrl: './add.dialog.html',
    styleUrls: ['./add.dialog.scss']
})
export class AddItemCategoryComponent implements OnInit {
    form = new FormGroup({
        name: new FormControl('', Validators.required),
        status: new FormControl(true)
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
        const itemCategory = new ItemCategory();
        itemCategory.Name = this.form.get('name').value;
        itemCategory.Id = 0;
        itemCategory.Status = this.form.get('status').value ? 1 : 0;
        const self = this;
        this.dataService.addItemCategory(itemCategory).subscribe(
            data => {
                console.log(data);
                self.router.navigate(['/item-category'], {
                    relativeTo: this.route
                });
            },
            error => {
            }
        );
    }

    onCancel() {
        this.router.navigate(['/item-category'], {
            relativeTo: this.route
        });
    }
}
