import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HardwareItem } from '../../models/HardwareItem';
import { HardwareItemDataService } from '../../services/data.service';
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
export class AddHardwareItemComponent implements OnInit {
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
        public dataService: HardwareItemDataService,
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
        const hardwareItem = new HardwareItem();
        var comp = this.form.value;
        debugger;
        hardwareItem.Id = 0;
        hardwareItem.BusinessName = comp.businessname;
        hardwareItem.Slogan = comp.slogan;
        hardwareItem.OperatorName = comp.operatorname;
        hardwareItem.Address = new Address();
        hardwareItem.Address.AddressLine1 = comp.addressline1;
        hardwareItem.Address.AddressLine2 = comp.addressline2;
        hardwareItem.Address.AddressLine3 = comp.addressline3;
        hardwareItem.Address.CountryId = comp.country;
        hardwareItem.Address.CityId = comp.city;
        hardwareItem.Address.ZoneId = comp.zone;
        hardwareItem.Address.StateId = comp.state;
        hardwareItem.Address.AadharNo = comp.adharno;
        hardwareItem.Address.PANNo = comp.panno;
        hardwareItem.Address.TINNo = comp.tinno;
        hardwareItem.Address.ServiceTaxNo = comp.servicetaxno;
        hardwareItem.Address.Website = comp.website;
        hardwareItem.Address.PostCode = comp.postcode;
        hardwareItem.Address.PhoneNo = comp.phoneno;
        hardwareItem.Address.MobileNo = comp.mobileno;
        hardwareItem.Address.AddressTypeId = 1;
        hardwareItem.Address.EntertainmentTaxNo = comp.entertainmenttaxno;
        hardwareItem.Address.CTSNo = comp.cstno;
        hardwareItem.Status = this.form.get('status').value ? 1 : 0;
        const self = this;
        this.dataService.addHardwareItem(hardwareItem).subscribe(
            data => {
                console.log(data);
                self.router.navigate(['/hardwareItem'], {
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
        this.router.navigate(['/hardwareItem'], {
            relativeTo: this.route
        });
    }
}
