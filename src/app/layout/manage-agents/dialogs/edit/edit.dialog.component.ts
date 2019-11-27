import { Component, OnInit } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ManageAgents } from '../../models/manageagents';
import { DataService } from '../../services/data.service';
@Component({
    selector: 'app-baza.dialog',
    templateUrl: './edit.dialog.html',
    styleUrls: ['./edit.dialog.scss']
})
export class EditManageAgentsComponent implements OnInit {
    form = new FormGroup({
        name: new FormControl('', Validators.required),
        status: new FormControl(true)
    });

    manageAgents: ManageAgents;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        public dataService: DataService,
        private router: Router
    ) {
        const navigation = this.router.getCurrentNavigation();
        this.manageAgents = navigation.extras.state as ManageAgents;
    }

    get name() {
        return this.form.get('name');
    }

     // convenience getter for easy access to form fields
    get f() {
      return this.form.controls;
    }

    ngOnInit() {
      this.f.name.setValue(this.manageAgents.Name);
      this.f.status.setValue(this.manageAgents.Status === 1 ? true : false);
    }

    onEdit() {
        this.manageAgents.Name = this.f.name.value;
        const self = this;
        this.dataService.updateManageAgents(this.manageAgents).subscribe(
            data => {
                console.log(data);
                self.router.navigate(['/manage-agents'], {
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
        this.router.navigate(['/manage-agents'], {
            relativeTo: this.route
        });
    }
}
