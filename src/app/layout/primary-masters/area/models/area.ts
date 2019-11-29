import { City } from '../../city/models/city';

export class Area {
  Id: number;
  Name: string;
  Status: number;
  CityId: number;
  CreatedOn: string;
  City: City;
}
