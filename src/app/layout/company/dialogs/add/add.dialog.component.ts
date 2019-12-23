import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from '../../models/Company';
import { DataService } from '../../services/data.service';
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
export class AddCompanyComponent implements OnInit {
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
        public dataService: DataService,
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
        const company = new Company();
        var comp = this.form.value;
        debugger;
        company.Id = 0;
        company.BusinessName = comp.businessname;
        company.Slogan = comp.slogan;
        company.OperatorName = comp.operatorname;
        company.Address = new Address();
        company.Address.AddressLine1 = comp.addressline1;
        company.Address.AddressLine2 = comp.addressline2;
        company.Address.AddressLine3 = comp.addressline3;
        company.Address.CountryId = comp.country;
        company.Address.CityId = comp.city;
        company.Address.ZoneId = comp.zone;
        company.Address.StateId = comp.state;
        company.Address.AadharNo = comp.adharno;
        company.Address.PANNo = comp.panno;
        company.Address.TINNo = comp.tinno;
        company.Address.ServiceTaxNo = comp.servicetaxno;
        company.Address.Website = comp.website;
        company.Address.PostCode = comp.postcode;
        company.Address.PhoneNo = comp.phoneno;
        company.Address.MobileNo = comp.mobileno;
        company.Address.AddressTypeId = 1;
        company.Address.EntertainmentTaxNo = comp.entertainmenttaxno;
        company.Address.CTSNo = comp.cstno;
        company.Status = this.form.get('status').value ? 1 : 0;
        const self = this;
        this.dataService.addCompany(company).subscribe(
            data => {
                console.log(data);
                self.router.navigate(['/company'], {
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
        this.router.navigate(['/company'], {
            relativeTo: this.route
        });
    }
}
