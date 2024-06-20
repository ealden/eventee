<script setup>
import { ref, computed } from 'vue'

import {
  dateToday, dateFrom, dateTimeFrom, formatDate, formatTime, formatHour, formatDateToday
} from '../common/date.js'

const props = defineProps(['events', 'today', 'isCurrentView'])

const today = ref(props.today)

const calendar = computed(() => {
  const calendar = []

  for (let h = 0; h < 24; h++) {
    const date = dateTimeFrom(today.value, h)

    calendar.push(date.toISOString())
  }

  return calendar
})

function prevDay() {
  today.value = dateFrom(today.value, -1)
}

function thisDay() {
  today.value = dateToday()
}

function nextDay() {
  today.value = dateFrom(today.value, 1)
}
</script>

<template>
  <div id="day-view" v-if="isCurrentView">
    <div class="container">
      <div class="row">
        <div class="col">
          <h2 class="current-period" data-test="header">
            {{ formatDateToday(today) }}
          </h2>
        </div>
        <div class="col text-end">
          <a id="prev-day" href="#" @click="prevDay">&lt; Prev</a>
          <a id="this-day" class="mx-1" href="#" @click="thisDay">Today</a>
          <a id="next-day" href="#" @click="nextDay">Next &gt;</a>
        </div>
      </div>
    </div>
    <div id="day" class="container">
      <div class="row" v-for="(dateTime, i) in calendar">
        <div class="col-1 border text-end">{{ formatHour(i + 1) }}</div>
        <div class="col border">
          <div class="row">
            <div class="col event"
                 :class="dateTime"
                 v-for="event in events[dateTime]"
                 data-test="event">
              <span class="summary">
                {{ event.summary }}
              </span>
              <span class="starts_at visually-hidden">
                {{ formatTime(event.starts_at) }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
