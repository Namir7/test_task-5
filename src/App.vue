<script setup lang="ts">
import MachinesList from './components/machines-list.vue';
import SearchInput from './components/search-input.vue';

import { computed, onBeforeMount } from 'vue';
import { useStore } from './store';

const store = useStore();

const isDateDefined = computed(
  () =>
    store.state.machines.length &&
    store.state.tradePoints.length &&
    store.state.machineTypes.length
);

onBeforeMount(() => {
  store.dispatch('fetchAll');
});
</script>

<template>
  <img
    src="https://m.media-amazon.com/images/I/51QPEpKXJtL.jpg"
    width="150"
    height="250"
  />
  <SearchInput />
  <div v-if="isDateDefined">
    <MachinesList />
  </div>
</template>

<style scoped></style>
