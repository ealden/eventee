<script setup>
import { computed } from 'vue'

import { MONTHS, formatDay } from '../common/dates.js'

const props = defineProps(['month', 'events', 'calendar'])

const monthKey = computed(() => {
  return 'month-' + props.month
})
</script>

<template>
  <div class="col px-4">
    <div class="row">
      <div class="col fw-bold fs-5 header">
        {{ MONTHS[month] }}
      </div>
    </div>
    <div class="row text-center bg-secondary-subtle bg-gradient">
      <div class="col border p-2"><strong>S</strong></div>
      <div class="col border p-2"><strong>M</strong></div>
      <div class="col border p-2"><strong>T</strong></div>
      <div class="col border p-2"><strong>W</strong></div>
      <div class="col border p-2"><strong>T</strong></div>
      <div class="col border p-2"><strong>F</strong></div>
      <div class="col border p-2"><strong>S</strong></div>
    </div>
    <div class="row text-center"
         v-for="(week, i) in calendar[month]"
         :key="i">
      <template v-for="day in week"
                :key="day">
        <div class="col border p-2 day"
             :class="[monthKey, { 'border-primary bg-primary-subtle bg-gradient': events[day] }]">
          <template v-if="day">
            {{ formatDay(day) }}
          </template>
        </div>
        <div class="col visually-hidden"
             :class="{ 'has-events': events[day] }">
          {{ day }}
        </div>
      </template>
    </div>
  </div>
</template>
