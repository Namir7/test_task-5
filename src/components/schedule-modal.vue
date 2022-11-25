<script setup lang="ts">
import type { Schedule } from '../types/schedule.type';

type Props = {
  schedule: Schedule;
};

defineProps<Props>();

defineEmits<{
  (e: 'close'): void;
}>();
</script>

<template>
  <div class="schedule-modal">
    <p>Working Time</p>
    <ul>
      <li :key="day" v-for="(value, day) in schedule">
        {{ day }}: {{ value }}
      </li>
    </ul>

    <button @click="$emit('close')">close</button>
  </div>
</template>

<style></style>
