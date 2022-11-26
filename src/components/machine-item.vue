<script setup lang="ts">
import ScheduleModal from './schedule-modal.vue';

import { ref } from 'vue';
import { getStaticMapImage } from '../services/maps.service';
import { useStore } from '../store';
import { getTagName } from '../utils/get-tage-names';

type Props = {
  id: number;
};

const props = defineProps<Props>();
const store = useStore();

const machineJoined = store.getters.machineJoined(props.id);

const mapImage = getStaticMapImage({
  lat: machineJoined.tradePoint.location.latitude,
  lng: machineJoined.tradePoint.location.longitude,
});

const scheduleModalOpen = ref<boolean>(false);
</script>

<template>
  <div>
    <h2>{{ machineJoined.serialNumber }}</h2>
    <p>{{ machineJoined.tradePoint.location.address }}</p>
    <ul>
      <li :key="tag" v-for="tag in machineJoined.type.tags">
        <p>{{ getTagName(tag) }}</p>
      </li>
    </ul>
    <p>floor: {{ machineJoined.floor }}</p>
    <button @click="scheduleModalOpen = true">Schedule</button>
    <img :src="mapImage" />
    <div v-if="scheduleModalOpen">
      <ScheduleModal
        :schedule="machineJoined.tradePoint.workingTime"
        @close="scheduleModalOpen = false"
      />
    </div>
  </div>
</template>

<style></style>
