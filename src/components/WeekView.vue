<script setup>
import { ref, computed } from 'vue'

import {
  dateToday, dateFrom, weekStart, formatDate, formatTime, formatDateTime, formatHour, formatMonthYear, formatDay
} from '../common/date.js'

const props = defineProps(['events', 'today', 'isCurrentView'])

const today = ref(props.today)

const week = computed(() => {
  const week = []

  for (let i = 0; i < 7; i++) {
    const date = dateFrom(weekStart(today.value), i)

    week.push(formatDate(date))
  }

  return week
})

function prevWeek() {
  const date = new Date(today.value)
  date.setUTCDate(date.getUTCDate() - 7)

  today.value = date
}

function thisWeek() {
  today.value = dateToday()
}

function nextWeek() {
  const date = new Date(today.value)
  date.setUTCDate(date.getUTCDate() + 7)

  today.value = date
}
</script>

<template>
  <div id="week-view" v-if="isCurrentView">
    <div class="container">
      <div class="row">
        <div class="col">
          <h2 class="current-period" data-test="header">
            {{ formatMonthYear(today) }}
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
            <strong>{{ formatDay(week[0]) }}</strong>
          </span>
        </div>
        <div class="col">
          <strong>Mon</strong>
          <span class="day ms-1">
            <strong>{{ formatDay(week[1]) }}</strong>
          </span>
        </div>
        <div class="col">
          <strong>Tue</strong>
          <span class="day ms-1">
            <strong>{{ formatDay(week[2]) }}</strong>
          </span>
        </div>
        <div class="col">
          <strong>Wed</strong>
          <span class="day ms-1">
            <strong>{{ formatDay(week[3]) }}</strong>
          </span>
        </div>
        <div class="col">
          <strong>Thu</strong>
          <span class="day ms-1">
            <strong>{{ formatDay(week[4]) }}</strong>
          </span>
        </div>
        <div class="col">
          <strong>Fri</strong>
          <span class="day ms-1">
            <strong>{{ formatDay(week[5]) }}</strong>
          </span>
        </div>
        <div class="col">
          <strong>Sat</strong>
          <span class="day ms-1">
            <strong>{{ formatDay(week[6]) }}</strong>
          </span>
        </div>
      </div>
      <div class="row" v-for="hour in 24">
        <div class="col-1 border text-end">{{ formatHour(hour) }}</div>
        <div class="col border" v-for="date in week">
          <div class="row">
            <div class="col event"
                 :class="formatDateTime(date, formatHour(hour))"
                 v-for="event in events[formatDateTime(date, formatHour(hour))]"
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
