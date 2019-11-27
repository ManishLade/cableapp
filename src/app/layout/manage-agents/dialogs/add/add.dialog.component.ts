import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ManageAgents } from '../../models/manageagents';
import { DataService } from '../../services/data.service';

@Component({
    selector: 'app-add.dialog',
    templateUrl: './add.dialog.html',
    styleUrls: ['./add.dialog.scss']
})
export class AddManageAgentsComponent implements OnInit {
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
        const manageAgents = new ManageAgents();
        manageAgents.Name = this.form.get('name').value;
        manageAgents.Id = 0;
        manageAgents.Status = this.form.get('status').value ? 1 : 0;
        const self = this;
        this.dataService.addManageAgents(manageAgents).subscribe(
            data => {
                console.log(data);
                self.router.navigate(['/manage-agents'], {
                    relativeTo: this.route
                });
            },
            error => {
            }
        );
    }

    onCancel() {
        this.router.navigate(['/manage-agents'], {
            relativeTo: this.route
        });
    }
}
