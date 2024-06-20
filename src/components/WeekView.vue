<script setup>
import { ref, computed } from 'vue'

import {
  dateToday, dateTimeFrom, weekStart, weekFrom, formatTime, formatHour, formatYear, formatMonth, formatDay
} from '../common/date.js'

const props = defineProps(['events', 'today', 'isCurrentView'])

const today = ref(props.today)

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
            {{ formatMonth(today) }} {{ formatYear(today) }}
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
        <div class="col">
          <strong>Sun</strong>
          <span class="day ms-1">
            <strong>{{ formatDay(calendar[0][0]) }}</strong>
          </span>
        </div>
        <div class="col">
          <strong>Mon</strong>
          <span class="day ms-1">
            <strong>{{ formatDay(calendar[0][1]) }}</strong>
          </span>
        </div>
        <div class="col">
          <strong>Tue</strong>
          <span class="day ms-1">
            <strong>{{ formatDay(calendar[0][2]) }}</strong>
          </span>
        </div>
        <div class="col">
          <strong>Wed</strong>
          <span class="day ms-1">
            <strong>{{ formatDay(calendar[0][3]) }}</strong>
          </span>
        </div>
        <div class="col">
          <strong>Thu</strong>
          <span class="day ms-1">
            <strong>{{ formatDay(calendar[0][4]) }}</strong>
          </span>
        </div>
        <div class="col">
          <strong>Fri</strong>
          <span class="day ms-1">
            <strong>{{ formatDay(calendar[0][5]) }}</strong>
          </span>
        </div>
        <div class="col">
          <strong>Sat</strong>
          <span class="day ms-1">
            <strong>{{ formatDay(calendar[0][6]) }}</strong>
          </span>
        </div>
      </div>
      <div class="row" v-for="(hour, i) in calendar">
        <div class="col-1 border text-end">{{ formatHour(i + 1) }}</div>
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
                {{ formatTime(event.starts_at) }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
