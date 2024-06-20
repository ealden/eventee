<script setup>
import { ref, computed } from 'vue'

import {
  dateToday, dateFrom, monthStart, monthEnd, monthFrom, formatDate, formatTime, formatYear, formatMonth, formatDay
} from '../common/date.js'

const props = defineProps(['events', 'today', 'isCurrentView'])

const today = ref(props.today)

const calendar = computed(() => {
  const startDate = monthStart(today.value)
  const endDate = monthEnd(today.value)

  let week = []

  for (let i = 0; i < startDate.getUTCDay(); i++) {
    week.push(null)
  }

  const calendar = []

  for (let i = 0; i < endDate.getUTCDate(); i++) {
    const date = dateFrom(monthStart(today.value), i)

    week.push(formatDate(date))

    if (week.length == 7) {
      calendar.push(week)

      week = []
    }
  }

  if (week.length > 0) {
    while (week.length < 7) {
      week.push(null)
    }

    calendar.push(week)
  }

  return calendar
})

function prevMonth() {
  today.value = monthFrom(today.value, -1)
}

function thisMonth() {
  today.value = dateToday()
}

function nextMonth() {
  today.value = monthFrom(today.value, 1)
}
</script>

<template>
  <div id="month-view" v-if="isCurrentView">
    <div class="container">
      <div class="row">
        <div class="col">
          <h2 class="current-period" data-test="header">
            {{ formatMonth(today) }} {{ formatYear(today) }}
          </h2>
        </div>
        <div class="col text-end">
          <a id="prev-month" href="#" @click="prevMonth">&lt; Prev</a>
          <a id="this-month" class="mx-1" href="#" @click="thisMonth">Today</a>
          <a id="next-month" href="#" @click="nextMonth">Next &gt;</a>
        </div>
      </div>
    </div>
    <div id="month" class="container">
      <div class="row text-end">
        <div class="col"><strong>Sun</strong></div>
        <div class="col"><strong>Mon</strong></div>
        <div class="col"><strong>Tue</strong></div>
        <div class="col"><strong>Wed</strong></div>
        <div class="col"><strong>Thu</strong></div>
        <div class="col"><strong>Fri</strong></div>
        <div class="col"><strong>Sat</strong></div>
      </div>
      <template v-for="week in calendar">
        <div class="row">
          <div class="col border" v-for="date in week" :id="date">
            <div class="row text-end">
              <div class="col day">
                <template v-if="date">
                  {{ formatDay(date) }}
                </template>
              </div>
            </div>
            <div class="row event"
                 :class="date"
                 v-for="event in events[date]"
                 data-test="event">
              <div class="col summary text-start">
                {{ event.summary }}
              </div>
              <div class="col starts_at text-end">
                {{ formatTime(event.starts_at) }}
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
