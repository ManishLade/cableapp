import { Zone } from '../../zone/models/zone';

export class City {
  Id: number;
  Name: string;
  Status: number;
  ZoneId: number;
  CreatedOn: string;
  Zone: Zone;
}
