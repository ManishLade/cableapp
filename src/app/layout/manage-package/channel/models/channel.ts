import { Address } from '@app/_models/address';

export class Channel {
  Id: number;
  BusinessName: string;
  Slogan: string;
  AddressId: number | null;
  Status: number | null;
  OperatorName: string;
  OperatorCode: string;
  AreaOfOperation: string;
  CustDcumentPath: string;
  Address: Address;
  CreatedOn: string;
}