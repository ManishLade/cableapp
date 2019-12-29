import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../models/user';
import { UserDataService } from '../../services/data.service';
import { CountryDataService } from '@app/layout/primary-masters/country/services/data.service';
import { StateDataService } from '@app/layout/primary-masters/state/services/data.service';
import { CityDataService } from '@app/layout/primary-masters/city/services/data.service';
import { ZoneDataService } from '@app/layout/primary-masters/zone/services/data.service';
import { Address } from '@app/_models/address';

@Component({
    selector: 'app-add.dialog',
    templateUrl: './add.dialog.html',
    styleUrls: ['./add.dialog.scss']
})
export class AddUserComponent implements OnInit {
    form = new FormGroup({
        businessname: new FormControl('', Validators.required),
        slogan: new FormControl('', Validators.maxLength(256)),
        addressline1: new FormControl('', Validators.maxLength(256)),
        addressline2: new FormControl('', Validators.maxLength(256)),
        addressline3: new FormControl('', Validators.maxLength(256)),
        country: new FormControl(0),
        state: new FormControl(0),
        zone: new FormControl(0),
        city: new FormControl(0),
        postcode: new FormControl('', Validators.maxLength(7)),
        email: new FormControl('', Validators.email),
        mobileno: new FormControl(null, Validators.maxLength(10)),
        phoneno: new FormControl(''),
        tinno: new FormControl(''),
        panno: new FormControl(''),
        servicetaxno: new FormControl(''),
        entertainmenttaxno: new FormControl(''),
        cstno: new FormControl(''),
        website: new FormControl(''),
        status: new FormControl(true),
        operatorname: new FormControl(''),
        operatorcode: new FormControl(''),
        areaofoperation: new FormControl(''),
        gstno: new FormControl(''),
        adharno: new FormControl(''),
        documentsavepath: new FormControl('')
    });

    countries: { name: string; id: number; }[];
    zones: { name: string; id: number; }[];
    cities: { name: string; id: number; }[];
    states: { name: string; id: number; }[];
    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private countryDataService: CountryDataService,
        private stateDataService: StateDataService,
        private cityDataService: CityDataService,
        private zoneDataService: ZoneDataService,
        public dataService: UserDataService,
        private router: Router
    ) {
        this.countryDataService.getAllCountries();
        this.countryDataService.dataChange.subscribe(res => {
            this.countries = res.map(x => {
               return { name: x.Name, id: x.Id };
            });
        });
    }

    get name() {
        return this.form.get('name');
    }
    ngOnInit() {}

    onSubmit() {
        const user = new User();
        var comp = this.form.value;
        debugger;
        user.Id = 0;
        user.BusinessName = comp.businessname;
        user.Slogan = comp.slogan;
        user.OperatorName = comp.operatorname;
        user.Address = new Address();
        user.Address.AddressLine1 = comp.addressline1;
        user.Address.AddressLine2 = comp.addressline2;
        user.Address.AddressLine3 = comp.addressline3;
        user.Address.CountryId = comp.country;
        user.Address.CityId = comp.city;
        user.Address.ZoneId = comp.zone;
        user.Address.StateId = comp.state;
        user.Address.AadharNo = comp.adharno;
        user.Address.PANNo = comp.panno;
        user.Address.TINNo = comp.tinno;
        user.Address.ServiceTaxNo = comp.servicetaxno;
        user.Address.Website = comp.website;
        user.Address.PostCode = comp.postcode;
        user.Address.PhoneNo = comp.phoneno;
        user.Address.MobileNo = comp.mobileno;
        user.Address.AddressTypeId = 1;
        user.Address.EntertainmentTaxNo = comp.entertainmenttaxno;
        user.Address.CTSNo = comp.cstno;
        user.Status = this.form.get('status').value ? 1 : 0;
        const self = this;
        this.dataService.addUser(user).subscribe(
            data => {
                console.log(data);
                self.router.navigate(['/user'], {
                    relativeTo: this.route
                });
            },
            error => {
            }
        );
    }

    CountryChange(event) {
        this.stateDataService.getAllStatesByCountryId(event.target.value);
        this.stateDataService.dataChange.subscribe(res => {
            this.states = res.map(x => {
               return { name: x.Name, id: x.Id };
            });
        });
    }

    StateChange(event) {
        this.zoneDataService.getZonesByStateId(event.target.value);
        this.zoneDataService.dataChange.subscribe(res => {
            this.zones = res.map(x => {
               return { name: x.Name, id: x.Id };
            });
        });
    }

    ZoneChange(event) {
        this.cityDataService.getCitiesByZoneId(event.target.value);
        this.cityDataService.dataChange.subscribe(res => {
            this.cities = res.map(x => {
               return { name: x.Name, id: x.Id };
            });
        });
    }

    CityChange(event) {
        console.log(event);
    }

    onCancel() {
        this.router.navigate(['/user'], {
            relativeTo: this.route
        });
    }
}
