import type { Schedule } from '@/types/schedule.type';
import type { ILocation } from './location.interface';

export interface ITradePoint {
  id: number;

  location: ILocation;

  workingTime: Schedule;
}
