<script setup lang="ts">
import MachineItem from './machine-item.vue';

import { useStore } from '@/store';
import { computed, ref, watch } from 'vue-demi';
import type { IMachine } from '@/interfaces/machine.interface';

const store = useStore();

const filteredMachines = ref<IMachine[]>([]);

const machines = computed(() => store.state.machines);

watch(
  () => store.state.search,
  () => {
    filteredMachines.value = store.getters.filteredMachines;
  }
);
</script>

<template>
  <div class="machines-list">
    <ul v-if="!store.state.search">
      <li :key="machine" v-for="machine in machines">
        <MachineItem :id="machine.id" />
      </li>
    </ul>
    <ul v-else>
      <li :key="machine" v-for="machine in filteredMachines">
        <MachineItem :id="machine.id" />
      </li>
    </ul>
  </div>
</template>

<style></style>
