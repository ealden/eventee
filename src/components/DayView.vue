<script setup>
import { ref } from 'vue'

import {
  dateToday, dateFrom, formatDate, formatTime, formatDateTime, formatHour, formatDateToday
} from '../common/date.js'

const props = defineProps(['events', 'today', 'isCurrentView'])

const today = ref(props.today)

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
      <div class="row" v-for="hour in 24">
        <div class="col-1 border text-end">{{ formatHour(hour) }}</div>
        <div class="col border">
          <div class="row">
            <div class="col event"
                 :class="formatDateTime(formatDate(today), formatHour(hour))"
                 v-for="event in events[formatDateTime(formatDate(today), formatHour(hour))]"
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
