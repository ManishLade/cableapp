import { Component, OnInit } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ChannelCategory } from '../../models/channelcategory';
import { DataService } from '../../services/data.service';
@Component({
    selector: 'app-baza.dialog',
    templateUrl: './edit.dialog.html',
    styleUrls: ['./edit.dialog.scss']
})
export class EditChannelCategoryComponent implements OnInit {
    form = new FormGroup({
        name: new FormControl('', Validators.required),
        status: new FormControl(true)
    });

    channelCategory: ChannelCategory;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        public dataService: DataService,
        private router: Router
    ) {
        const navigation = this.router.getCurrentNavigation();
        this.channelCategory = navigation.extras.state as ChannelCategory;
    }

    get name() {
        return this.form.get('name');
    }

     // convenience getter for easy access to form fields
    get f() {
      return this.form.controls;
    }

    ngOnInit() {
      this.f.name.setValue(this.channelCategory.Name);
      this.f.status.setValue(this.channelCategory.Status === 1 ? true : false);
    }

    onEdit() {
        this.channelCategory.Name = this.f.name.value;
        const self = this;
        this.dataService.updateChannelCategory(this.channelCategory).subscribe(
            data => {
                console.log(data);
                self.router.navigate(['/channel-category'], {
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
        this.router.navigate(['/channel-category'], {
            relativeTo: this.route
        });
    }
}
