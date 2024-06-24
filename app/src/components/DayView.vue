<script setup>
import { ref, computed } from 'vue'

import { dateFrom, formatTime, formatDateTime, formatDayViewHeader } from '../common/dates.js'
import { dayCalendar } from '../common/calendars.js'

const props = defineProps(['events', 'today', 'isCurrentView'])

const today = ref(props.today)

const currentDate = ref(today.value)

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
  <div id="day-view" v-if="isCurrentView">
    <div class="container">
      <div class="row">
        <div class="col">
          <h2 id="current-period">
            {{ header }}
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
      <div class="row" v-for="dateTime in calendar">
        <div class="col-1 border text-end">{{ formatTime(dateTime) }}</div>
        <div class="col border">
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
