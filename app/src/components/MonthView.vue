<script setup>
import { ref, computed } from 'vue'

import {
  dateKey,
  dateFrom,
  monthStart,
  monthEnd,
  monthFrom,
  formatTime,
  formatDateTime,
  formatDay,
  formatMonthViewHeader
} from '../common/dates.js'

const props = defineProps(['events', 'today', 'isCurrentView'])

const today = ref(props.today)

const currentDate = ref(today.value)

const header = computed(() => {
  return formatMonthViewHeader(currentDate.value)
})

const calendar = computed(() => {
  const startDate = monthStart(currentDate.value)
  const endDate = monthEnd(currentDate.value)

  let week = []

  for (let i = 0; i < startDate.getUTCDay(); i++) {
    week.push(null)
  }

  const calendar = []

  for (let i = 0; i < endDate.getUTCDate(); i++) {
    const date = dateFrom(monthStart(currentDate.value), i)

    week.push(dateKey(date))

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
  currentDate.value = monthFrom(currentDate.value, -1)
}

function thisMonth() {
  currentDate.value = today.value
}

function nextMonth() {
  currentDate.value = monthFrom(currentDate.value, 1)
}
</script>

<template>
  <div id="month-view" v-if="isCurrentView">
    <div class="container">
      <div class="row">
        <div class="col">
          <h2 id="current-period">
            {{ header }}
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
                 v-for="event in events[date]">
              <div class="col summary text-start">
                {{ event.summary }}
              </div>
              <div class="col text-end">
                {{ formatTime(event.starts_at) }}
              </div>
              <span class="starts_at visually-hidden">
                {{ formatDateTime(event.starts_at) }}
              </span>
              <span class="ends_at visually-hidden">
                {{ formatDateTime(event.ends_at) }}
              </span>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
