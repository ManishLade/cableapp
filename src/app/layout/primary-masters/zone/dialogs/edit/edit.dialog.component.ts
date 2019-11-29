import { Component, OnInit } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Zone } from '../../models/zone';
import { ZoneDataService } from '../../services/data.service';
import { StateDataService } from '@app/layout/primary-masters/state/services/data.service';
@Component({
    selector: 'app-baza.dialog',
    templateUrl: './edit.dialog.html',
    styleUrls: ['./edit.dialog.scss']
})
export class EditZoneComponent implements OnInit {
    form = new FormGroup({
        name: new FormControl('', Validators.required),
        status: new FormControl(true),
        state: new FormControl('', Validators.required)
    });

    zone: Zone;
    states: { name: string; id: number; }[];

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
        const navigation = this.router.getCurrentNavigation();
        this.zone = navigation.extras.state as Zone;
    }

    get name() {
        return this.form.get('name');
    }

     // convenience getter for easy access to form fields
    get f() {
      return this.form.controls;
    }

    ngOnInit() {
      this.f.name.setValue(this.zone.Name);
      this.f.status.setValue(this.zone.Status === 1 ? true : false);
    }

    onEdit() {
        this.zone.Name = this.f.name.value;
        this.zone.Status = this.form.get('status').value ? 1 : 0;
        this.zone.StateId = this.form.get('state').value;
        const self = this;
        this.zoneDataService.updateZone(this.zone).subscribe(
            data => {
                console.log(data);
                self.router.navigate(['/zone'], {
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
        this.router.navigate(['/zone'], {
            relativeTo: this.route
        });
    }
}
