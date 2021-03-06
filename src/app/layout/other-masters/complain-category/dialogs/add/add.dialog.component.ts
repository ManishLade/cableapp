import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ComplainCategory } from '../../models/complaincategory';
import { DataService } from '../../services/data.service';

@Component({
    selector: 'app-add.dialog',
    templateUrl: './add.dialog.html',
    styleUrls: ['./add.dialog.scss']
})
export class AddComplainCategoryComponent implements OnInit {
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
        const complainCategory = new ComplainCategory();
        complainCategory.Name = this.form.get('name').value;
        complainCategory.Id = 0;
        complainCategory.Status = this.form.get('status').value ? 1 : 0;
        const self = this;
        this.dataService.addComplainCategory(complainCategory).subscribe(
            data => {
                console.log(data);
                self.router.navigate(['/complain-category'], {
                    relativeTo: this.route
                });
            },
            error => {
            }
        );
    }

    onCancel() {
        this.router.navigate(['/complain-category'], {
            relativeTo: this.route
        });
    }
}
