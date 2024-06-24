<script setup>
import { ref, computed } from 'vue'

import { weekFrom, formatTime, formatDateTime, formatDay, formatMonthViewHeader } from '../common/dates.js'
import { weekCalendar } from '../common/calendars.js'

const props = defineProps(['events', 'today', 'isCurrentView'])

const today = ref(props.today)

const currentDate = ref(today.value)

const header = computed(() => {
  return formatMonthViewHeader(currentDate.value)
})

const calendar = computed(() => {
  return weekCalendar(currentDate.value)
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
  currentDate.value = weekFrom(currentDate.value, -1)
}

function thisWeek() {
  currentDate.value = today.value
}

function nextWeek() {
  currentDate.value = weekFrom(currentDate.value, 1)
}
</script>

<template>
  <div id="week-view" v-if="isCurrentView">
    <div class="container">
      <div class="row">
        <div class="col">
          <h2 id="current-period">
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
        <div class="col-1">
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
                 v-for="event in events[dateTime]">
              <span class="summary">
                {{ event.summary }}
              </span>
              <span class="starts_at visually-hidden">
                {{ formatDateTime(event.starts_at) }}
              </span>
              <span class="ends_at visually-hidden">
                {{ formatDateTime(event.ends_at) }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
