<script setup lang="ts">
import { useStore } from '@/store';

const store = useStore();
</script>

<template>
  <input
    type="text"
    :value="store.state.search"
    @input="(e) => store.commit('SET_SEARCH', e.target.value)"
  />
</template>

<style></style>
