import { State } from '../../state/models/state';

export class Zone {
  Id: number;
  Name: string;
  Status: number;
  StateId: number;
  CreatedOn: string;
  State: State;
}
