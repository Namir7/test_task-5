<script setup lang="ts">
import ScheduleModal from './schedule-modal.vue';

import type { ITradePoint } from '../trade-points/trade-point.interface';
import type { IMachine } from '../interfaces/machine.interface';
import type { IMachineType } from '../interfaces/machine-type.interface';
import { onBeforeMount, ref } from 'vue-demi';
import { getStaticMapImage } from '../services/maps.service';
import { getTradePoint } from '../services/trade-points.service';
import { getMachineType } from '../services/machines.service';

type Props = {
  machine: IMachine;
};

const props = defineProps<Props>();

const tradePoint = ref<ITradePoint>();
const machineType = ref<IMachineType>();
const mapImage = ref<string>();

const scheduleModalOpen = ref<boolean>(false);

onBeforeMount(async () => {
  const tradePointId = props.machine.tradePointId;

  tradePoint.value = await getTradePoint(tradePointId);

  const machineTypeId = props.machine.typeId;

  machineType.value = await getMachineType(machineTypeId);

  mapImage.value = getStaticMapImage({
    lat: tradePoint.value.location.latitude,
    lng: tradePoint.value.location.longitude,
  });
});
</script>

<template>
  <div>
    <h2>{{ machine.serialNumber }}</h2>
    <p>{{ tradePoint && tradePoint.location.address }}</p>
    <ul v-if="machineType">
      <li :key="tag" v-for="tag in machineType.tags">
        <p>{{ tag }}</p>
      </li>
    </ul>
    <p>floor: {{ machine.floor }}</p>
    <button
      @click="
        () => {
          scheduleModalOpen = true;
        }
      "
    >
      Schedule
    </button>
    <img :src="mapImage" />
    <div v-if="tradePoint && scheduleModalOpen">
      <ScheduleModal
        :schedule="tradePoint.workingTime"
        @close="
          () => {
            scheduleModalOpen = false;
          }
        "
      />
    </div>
  </div>
</template>

<style></style>
