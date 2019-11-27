import { Component, OnInit } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ComplainCategory } from '../../models/complaincategory';
import { DataService } from '../../services/data.service';
@Component({
    selector: 'app-baza.dialog',
    templateUrl: './edit.dialog.html',
    styleUrls: ['./edit.dialog.scss']
})
export class EditComplainCategoryComponent implements OnInit {
    form = new FormGroup({
        name: new FormControl('', Validators.required),
        status: new FormControl(true)
    });

    complainCategory: ComplainCategory;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        public dataService: DataService,
        private router: Router
    ) {
        const navigation = this.router.getCurrentNavigation();
        this.complainCategory = navigation.extras.state as ComplainCategory;
    }

    get name() {
        return this.form.get('name');
    }

     // convenience getter for easy access to form fields
    get f() {
      return this.form.controls;
    }

    ngOnInit() {
      this.f.name.setValue(this.complainCategory.Name);
      this.f.status.setValue(this.complainCategory.Status === 1 ? true : false);
    }

    onEdit() {
        this.complainCategory.Name = this.f.name.value;
        const self = this;
        this.dataService.updateComplainCategory(this.complainCategory).subscribe(
            data => {
                console.log(data);
                self.router.navigate(['/complain-category'], {
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
        this.router.navigate(['/complainCategory'], {
            relativeTo: this.route
        });
    }
}
