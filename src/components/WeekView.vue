<script setup>
import { ref, computed } from 'vue'

import {
  dateToday,
  dateTimeFrom,
  weekStart,
  weekFrom,
  formatDate,
  formatTime,
  formatDay,
  formatMonthViewHeader
} from '../common/dates.js'

const props = defineProps(['events', 'today', 'isCurrentView'])

const today = ref(props.today)

const header = computed(() => {
  return formatMonthViewHeader(today.value)
})

const calendar = computed(() => {
  const calendar = []

  const startDate = weekStart(today.value)

  for (let h = 0; h < 24; h++) {
    const hour = []

    for (let d = 0; d < 7; d++) {
      const date = dateTimeFrom(startDate, ((d * 24) + h))

      hour.push(date.toISOString())
    }

    calendar.push(hour)
  }

  return calendar
})

const days = computed(() => {
  const date = calendar.value[0]

  return {
    'Sun': formatDay(date[0]),
    'Mon': formatDay(date[1]),
    'Tue': formatDay(date[2]),
    'Wed': formatDay(date[3]),
    'Thu': formatDay(date[4]),
    'Fri': formatDay(date[5]),
    'Sat': formatDay(date[6])
  }
})

function prevWeek() {
  today.value = weekFrom(today.value, -1)
}

function thisWeek() {
  today.value = dateToday()
}

function nextWeek() {
  today.value = weekFrom(today.value, 1)
}
</script>

<template>
  <div id="week-view" v-if="isCurrentView">
    <div class="container">
      <div class="row">
        <div class="col">
          <h2 class="current-period" data-test="header">
            {{ header }}
          </h2>
        </div>
        <div class="col text-end">
          <a id="prev-week" href="#" @click="prevWeek">&lt; Prev</a>
          <a id="this-week" class="mx-1" href="#" @click="thisWeek">Today</a>
          <a id="next-week" href="#" @click="nextWeek">Next &gt;</a>
        </div>
      </div>
    </div>
    <div id="week" class="container">
      <div class="row text-center">
        <div class="col">
          &nbsp;
        </div>
        <div class="col" v-for="(value, label) in days">
          <strong>{{ label }}</strong>
          <span class="day ms-1">
            <strong>{{ value }}</strong>
          </span>
        </div>
      </div>
      <div class="row" v-for="hour in calendar">
        <div class="col-1 border text-end">{{ formatTime(hour[0]) }}</div>
        <div class="col border" v-for="dateTime in hour">
          <div class="row">
            <div class="col event"
                 :class="dateTime"
                 v-for="event in events[dateTime]"
                 data-test="event">
              <span class="summary">
                {{ event.summary }}
              </span>
              <span class="starts_at visually-hidden">
                {{ formatDate(event.starts_at) }} {{ formatTime(event.starts_at) }}
              </span>
              <span class="ends_at visually-hidden">
                {{ formatDate(event.ends_at) }} {{ formatTime(event.ends_at) }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
