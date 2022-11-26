import type { IMachineType } from './machine-type.interface';
import type { ITradePoint } from './trade-point.interface';

export interface IMachineJoined {
  id: id;

  serialNumber: serialNumber;

  tradePoint: ITradePoint;

  floor: number;

  type: IMachineType;
}
