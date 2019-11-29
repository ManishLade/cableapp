import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Zone } from '../../models/zone';
import { ZoneDataService } from '../../services/data.service';
import { StateDataService } from '@app/layout/primary-masters/state/services/data.service';

@Component({
    selector: 'app-add.dialog',
    templateUrl: './add.dialog.html',
    styleUrls: ['./add.dialog.scss']
})
export class AddZoneComponent implements OnInit {
    states: { name: string; id: number; }[];

    form = new FormGroup({
        name: new FormControl('', Validators.required),
        status: new FormControl(true),
        state: new FormControl('', Validators.required)
    });

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        public zoneDataService: ZoneDataService,
        private stateDataService: StateDataService,
        private router: Router
    ) {
        this.stateDataService.getAllStates();
        this.stateDataService.dataChange.subscribe(res => {
            this.states = res.map(x => {
               return { name: x.Name, id: x.Id };
            });
        });
    }

    get name() {
        return this.form.get('name');
    }
    ngOnInit() {}

    onSubmit() {
        const zone = new Zone();
        zone.Name = this.form.get('name').value;
        zone.Id = 0;
        zone.Status = this.form.get('status').value ? 1 : 0;
        zone.StateId = this.form.get('state').value;
        const self = this;
        this.zoneDataService.addZone(zone).subscribe(
            data => {
                console.log(data);
                self.router.navigate(['/zone'], {
                    relativeTo: this.route
                });
            },
            error => {
            }
        );
    }

    onCancel() {
        this.router.navigate(['/zone'], {
            relativeTo: this.route
        });
    }
}
