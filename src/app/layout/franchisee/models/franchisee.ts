import { Address } from '@app/_models/address';

export class Franchisee {
  Id: number;
  Name: string;
  FranchiseeId: number;
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
  Franchisee: Franchisee;
  Franchisee1: Franchisee[];
  Franchisee2: Franchisee;
}
