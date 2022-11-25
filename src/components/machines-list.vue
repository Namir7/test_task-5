<script setup lang="ts">
import MachineItem from './machine-item.vue';

import { onMounted, ref } from 'vue';
import type { IMachine } from '../interfaces/machine.interface';
import { getMachines } from '../services/machines.service';

const machines = ref<IMachine[]>();

onMounted(async () => {
  machines.value = await getMachines();
});
</script>

<template>
  <div class="machines-list">
    <ul>
      <li :key="machine" v-for="machine in machines">
        <MachineItem :machine="machine" />
      </li>
    </ul>
  </div>
</template>

<style></style>
