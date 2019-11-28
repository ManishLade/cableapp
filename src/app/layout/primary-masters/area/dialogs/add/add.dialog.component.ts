import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Area } from '../../models/area';
import { DataService } from '../../services/data.service';

@Component({
    selector: 'app-add.dialog',
    templateUrl: './add.dialog.html',
    styleUrls: ['./add.dialog.scss']
})
export class AddAreaComponent implements OnInit {
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
        const area = new Area();
        area.Name = this.form.get('name').value;
        area.Id = 0;
        area.Status = this.form.get('status').value ? 1 : 0;
        const self = this;
        this.dataService.addArea(area).subscribe(
            data => {
                console.log(data);
                self.router.navigate(['/area'], {
                    relativeTo: this.route
                });
            },
            error => {
            }
        );
    }

    onCancel() {
        this.router.navigate(['/area'], {
            relativeTo: this.route
        });
    }
}
