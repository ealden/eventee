<script setup>
import { ref, computed } from 'vue'

import { dateFrom, formatTime, formatDayViewHeader } from '../common/dates.js'
import { dayCalendar } from '../common/calendars.js'
import ViewHeader from './ViewHeader.vue'
import Events from './Events.vue'

const props = defineProps(['events', 'today'])

const today = ref(props.today)

const currentDate = defineModel()

const header = computed(() => {
  return formatDayViewHeader(currentDate.value)
})

const calendar = computed(() => {
  return dayCalendar(currentDate.value)
})

function prevDay() {
  currentDate.value = dateFrom(currentDate.value, -1)
}

function thisDay() {
  currentDate.value = today.value
}

function nextDay() {
  currentDate.value = dateFrom(currentDate.value, 1)
}
</script>

<template>
  <div id="day-view">
    <ViewHeader :header="header"
                :prev-action="prevDay"
                :this-action="thisDay"
                :next-action="nextDay" />
    <div id="day" class="container">
      <div class="row event-row"
           v-for="dateTime in calendar"
           :key="dateTime">
        <div class="col-1 border text-end">
          {{ formatTime(dateTime) }}
        </div>
        <div class="col border">
          <Events :events="events[dateTime]" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.event-row {
  height: 50px;
}
</style>
