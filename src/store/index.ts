import type { IMachineJoined } from '@/interfaces/machine-joined.interface';
import type { IMachineType } from '@/interfaces/machine-type.interface';
import type { IMachine } from '@/interfaces/machine.interface';
import type { ITradePoint } from '@/interfaces/trade-point.interface';
import { getMachines, getMachinesTypes } from '@/services/machines.service';
import { getTradePoints } from '@/services/trade-points.service';
import type { InjectionKey } from 'vue';
import type { ActionTree, GetterTree, MutationTree } from 'vuex';
import { createStore, Store, useStore as baseUseStore } from 'vuex';

interface State {
  machines: IMachine[];
  tradePoints: ITradePoint[];
  machineTypes: IMachineType[];

  search: string;
}

const state: State = {
  machines: [],
  tradePoints: [],
  machineTypes: [],

  search: '',
};

const getters: GetterTree<State, State> = {
  filteredMachines: (state: State): IMachine[] => {
    const search = state.search;

    console.log('search');
    console.log(search);

    return state.machines.filter(({ tradePointId, serialNumber }) => {
      const tradePoint: ITradePoint = state.tradePoints.find(
        ({ id }) => tradePointId === id
      )!;

      console.log('trade point');
      console.log(tradePoint);

      console.log('serail number');
      console.log(serialNumber);

      return (
        new RegExp(search, 'i').test(tradePoint.location.address) ||
        new RegExp(search, 'i').test(serialNumber)
      );
    });
  },

  machineJoined:
    (state: State) =>
    (machineId: id): IMachineJoined => {
      const machine = state.machines.find(
        (machine) => machine.id === machineId
      )!;

      const { typeId, tradePointId, ...rest } = machine;

      const tradePoint = state.tradePoints.find(
        (tradePoint) => tradePoint.id === tradePointId
      )!;

      const machineType = state.machineTypes.find(
        (machineType) => machineType.id === typeId
      )!;

      return {
        tradePoint,
        type: machineType,
        ...rest,
      };
    },
};

const mutations: MutationTree<State> = {
  SET_MACHINES: (state: State, value: IMachine[]): void => {
    state.machines = value;
  },

  SET_MACHINES_TYPES: (state: State, value: IMachineType[]) => {
    state.machineTypes = value;
  },

  SET_TRADE_POINTS: (state: State, value: ITradePoint[]) => {
    state.tradePoints = value;
  },

  SET_SEARCH: (state: State, value: string): void => {
    state.search = value;
  },
};

const actions: ActionTree<State, State> = {
  fetchMachines: async ({ commit }) => {
    const machines = await getMachines();

    commit('SET_MACHINES', machines);
  },

  fetchTradePoints: async ({ commit }) => {
    const tradePoints = await getTradePoints();

    commit('SET_TRADE_POINTS', tradePoints);
  },

  fetchMachineTypes: async ({ commit }) => {
    const machineTypes = await getMachinesTypes();

    commit('SET_MACHINES_TYPES', machineTypes);
  },

  fetchAll: async ({ dispatch }) => {
    Promise.all([
      dispatch('fetchMachines'),
      dispatch('fetchTradePoints'),
      dispatch('fetchMachineTypes'),
    ]);

    console.log('log from fetch');
  },
};

export const storeKey: InjectionKey<Store<State>> = Symbol();

export const useStore = () => {
  return baseUseStore(storeKey);
};

export const store = createStore<State>({
  strict: true,
  state,
  getters,
  mutations,
  actions,
});
