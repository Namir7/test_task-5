import { api } from '@/common/api.service';
import type { ITradePoint } from '../interfaces/trade-point.interface';

export const getTradePoint = (tradePointId: id) =>
  api<ITradePoint>(`/tradePoints/${tradePointId}`);
