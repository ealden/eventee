<script setup>
import { ref, computed } from 'vue'

import {
  dateToday, dateFrom, weekStart, weekFrom, formatDate, formatTime, formatDateTime, formatHour, formatYear, formatMonth, formatDay
} from '../common/date.js'

const props = defineProps(['events', 'today', 'isCurrentView'])

const today = ref(props.today)

const calendar = computed(() => {
  const calendar = []

  for (let i = 0; i < 7; i++) {
    const date = dateFrom(weekStart(today.value), i)

    calendar.push(date.toISOString())
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
            <strong>{{ formatDay(calendar[0]) }}</strong>
          </span>
        </div>
        <div class="col">
          <strong>Mon</strong>
          <span class="day ms-1">
            <strong>{{ formatDay(calendar[1]) }}</strong>
          </span>
        </div>
        <div class="col">
          <strong>Tue</strong>
          <span class="day ms-1">
            <strong>{{ formatDay(calendar[2]) }}</strong>
          </span>
        </div>
        <div class="col">
          <strong>Wed</strong>
          <span class="day ms-1">
            <strong>{{ formatDay(calendar[3]) }}</strong>
          </span>
        </div>
        <div class="col">
          <strong>Thu</strong>
          <span class="day ms-1">
            <strong>{{ formatDay(calendar[4]) }}</strong>
          </span>
        </div>
        <div class="col">
          <strong>Fri</strong>
          <span class="day ms-1">
            <strong>{{ formatDay(calendar[5]) }}</strong>
          </span>
        </div>
        <div class="col">
          <strong>Sat</strong>
          <span class="day ms-1">
            <strong>{{ formatDay(calendar[6]) }}</strong>
          </span>
        </div>
      </div>
      <div class="row" v-for="hour in 24">
        <div class="col-1 border text-end">{{ formatHour(hour) }}</div>
        <div class="col border" v-for="date in calendar">
          <div class="row">
            <div class="col event"
                 :class="formatDateTime(formatDate(date), formatHour(hour))"
                 v-for="event in events[formatDateTime(formatDate(date), formatHour(hour))]"
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
