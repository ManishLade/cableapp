import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../../models/Item';
import { ItemDataService } from '../../services/data.service';
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
export class AddItemComponent implements OnInit {
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
        public dataService: ItemDataService,
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
        const item = new Item();
        var comp = this.form.value;
        debugger;
        item.Id = 0;
        item.BusinessName = comp.businessname;
        item.Slogan = comp.slogan;
        item.OperatorName = comp.operatorname;
        item.Address = new Address();
        item.Address.AddressLine1 = comp.addressline1;
        item.Address.AddressLine2 = comp.addressline2;
        item.Address.AddressLine3 = comp.addressline3;
        item.Address.CountryId = comp.country;
        item.Address.CityId = comp.city;
        item.Address.ZoneId = comp.zone;
        item.Address.StateId = comp.state;
        item.Address.AadharNo = comp.adharno;
        item.Address.PANNo = comp.panno;
        item.Address.TINNo = comp.tinno;
        item.Address.ServiceTaxNo = comp.servicetaxno;
        item.Address.Website = comp.website;
        item.Address.PostCode = comp.postcode;
        item.Address.PhoneNo = comp.phoneno;
        item.Address.MobileNo = comp.mobileno;
        item.Address.AddressTypeId = 1;
        item.Address.EntertainmentTaxNo = comp.entertainmenttaxno;
        item.Address.CTSNo = comp.cstno;
        item.Status = this.form.get('status').value ? 1 : 0;
        const self = this;
        this.dataService.addItem(item).subscribe(
            data => {
                console.log(data);
                self.router.navigate(['/item'], {
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
        this.router.navigate(['/item'], {
            relativeTo: this.route
        });
    }
}
