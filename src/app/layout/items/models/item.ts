import { Address } from '@app/_models/address';

export class Item {
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



export class Franchisee {
  Id: number;
  Name: string;
  ItemId: number;
  ParentId: number | null;
  FranchiseeCode: string;
  OpeningAmount: string;
  OpeningType: number | null;
  FranciseeType: number | null;
  Description: string;
  BillNotes: string;
  Slogan: string;
  AddressId: number | null;
  Status: number | null;
  CreatedOn: string;
  Address: Address;
  Item: Item;
  Franchisee1: Franchisee[];
  Franchisee2: Franchisee;
}
