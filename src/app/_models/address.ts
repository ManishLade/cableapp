import { Country } from '@app/layout/primary-masters/country/models/issue';
import { City } from '@app/layout/primary-masters/city/models/city';
import { State } from '@app/layout/primary-masters/state/models/state';
import { Zone } from '@app/layout/primary-masters/zone/models/zone';

export class Address {
    Id: number;
    AddressTypeId: number | null;
    AddressLine1: string;
    AddressLine2: string;
    AddressLine3: string;
    CountryId: number | null;
    StateId: number | null;
    ZoneId: number | null;
    CityId: number | null;
    PostCode: string;
    Email: string;
    MobileNo: string;
    PhoneNo: string;
    ServiceTaxNo: string;
    EntertainmentTaxNo: string;
    GSTNo: string;
    PANNo: string;
    AadharNo: string;
    Logo: string;
    TINNo: string;
    CTSNo: string;
    Website: string;
    CreatedOn: string;
    City: City;
    Country: Country;
    State: State;
    Zone: Zone;
  }