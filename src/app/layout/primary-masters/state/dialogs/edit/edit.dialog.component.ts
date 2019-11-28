import { Component, OnInit } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { State } from '../../models/state';
import { DataService } from '../../services/data.service';
@Component({
    selector: 'app-baza.dialog',
    templateUrl: './edit.dialog.html',
    styleUrls: ['./edit.dialog.scss']
})
export class EditStateComponent implements OnInit {
    form = new FormGroup({
        name: new FormControl('', Validators.required),
        status: new FormControl(true)
    });

    state: State;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        public dataService: DataService,
        private router: Router
    ) {
        const navigation = this.router.getCurrentNavigation();
        this.state = navigation.extras.state as State;
    }

    get name() {
        return this.form.get('name');
    }

     // convenience getter for easy access to form fields
    get f() {
      return this.form.controls;
    }

    ngOnInit() {
      this.f.name.setValue(this.state.Name);
      this.f.status.setValue(this.state.Status === 1 ? true : false);
    }

    onEdit() {
        this.state.Name = this.f.name.value;
        const self = this;
        this.dataService.updateState(this.state).subscribe(
            data => {
                console.log(data);
                self.router.navigate(['/state'], {
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
        this.router.navigate(['/state'], {
            relativeTo: this.route
        });
    }
}
