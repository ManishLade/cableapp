import { Country } from '../../country/models/issue';

export class State {
  Id: number;
  Name: string;
  Status: number;
  CountryId: number;
  CreatedOn: string;
  Country: Country;
}
