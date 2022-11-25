import { api } from '@/common/api.service';
import type { IMachineType } from '../interfaces/machine-type.interface';
import type { IMachine } from '../interfaces/machine.interface';

export const getMachines = () => api<IMachine[]>('/machines');

export const getMachine = (machineId: id) =>
  api<IMachine>(`/machines/${machineId}`);

export const getMachineType = (machineTypeId: id) =>
  api<IMachineType>(`/machineTypes/${machineTypeId}`);
