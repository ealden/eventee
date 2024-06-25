<script setup>
import { computed } from 'vue'

import { formatDay } from '../common/dates.js'

const props = defineProps(['month', 'calendar', 'header'])

const monthKey = computed(() => {
  return 'month-' + props.month
})
</script>

<template>
  <div class="col px-3">
    <div class="row">
      <div class="col fw-bold fs-5 header">
        {{ header }}
      </div>
    </div>
    <div class="row text-center">
      <div class="col border"><strong>S</strong></div>
      <div class="col border"><strong>M</strong></div>
      <div class="col border"><strong>T</strong></div>
      <div class="col border"><strong>W</strong></div>
      <div class="col border"><strong>T</strong></div>
      <div class="col border"><strong>F</strong></div>
      <div class="col border"><strong>S</strong></div>
    </div>
    <div class="row text-center"
         v-for="week in calendar">
      <div class="col border day"
           :class="monthKey"
           v-for="day in week">
        <template v-if="day">
          {{ formatDay(day) }}
        </template>
      </div>
    </div>
  </div>
</template>
