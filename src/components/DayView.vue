<script setup>
import { ref } from 'vue'

import { formatDate, formatTime, formatDateTime, formatHour, formatDateToday } from '../common/date.js'

const props = defineProps(['events', 'today', 'isCurrentView'])

const today = ref(props.today)

function prevDay() {
  const date = new Date(today.value)
  date.setUTCDate(date.getUTCDate() - 1)

  today.value = date
}

function thisDay() {
  today.value = new Date('2024-06-18')
}

function nextDay() {
  const date = new Date(today.value)
  date.setUTCDate(date.getUTCDate() + 1)

  today.value = date
}
</script>

<template>
  <div id="day-view" v-if="isCurrentView">
    <div class="container">
      <div class="row">
        <div class="col">
          <h2 class="current-period">{{ formatDateToday(today) }}</h2>
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
                 v-for="event in events[formatDateTime(formatDate(today), formatHour(hour))]">
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
