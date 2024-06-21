<script setup>
import { ref, computed, onMounted } from 'vue'
import axios from 'axios'

import { formatDate, formatDateTime } from './common/dates.js'
import AllEventsView from './components/AllEventsView.vue'
import DayView from './components/DayView.vue'
import WeekView from './components/WeekView.vue'
import MonthView from './components/MonthView.vue'

const props = defineProps(['view'])

const events = ref([])

const today = ref(new Date('2024-06-18'))

const view = ref(props.view || 0)

const isAllEventsView = computed(() => {
  return view.value == 0
})

const isDayView = computed(() => {
  return view.value == 1
})

const isWeekView = computed(() => {
  return view.value == 2
})

const isMonthView = computed(() => {
  return view.value == 3
})

const groups = computed(() => {
  const groups = {}

  for (const event of events.value) {
    const date = formatDate(event.starts_at)

    if (!Object.hasOwn(groups, date)) {
      groups[date] = []
    }

    groups[date].push(event)

    const dateTime = formatDateTime(event.starts_at)

    if (!Object.hasOwn(groups, dateTime)) {
      groups[dateTime] = []
    }

    groups[dateTime].push(event)
  }

  return groups
})

function allEventsView() {
  view.value = 0
}

function dayView() {
  view.value = 1
}

function weekView() {
  view.value = 2
}

function monthView() {
  view.value = 3
}

function fetchEvents() {
  axios
    .get(import.meta.env.VITE_API_HOST + '/api/events')
    .then(response => {
      events.value = response.data
    })
}

onMounted(() => {
  fetchEvents()
})
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <a class="navbar-brand" href="#">
      Eventee
    </a>
    <ul class="navbar-nav">
      <li class="nav-item">
        <a id="nav-all-events-view"
           class="nav-link"
           href="#"
           :class="{ active: isAllEventsView }"
           @click="allEventsView">
          All
        </a>
      </li>
      <li class="nav-item">
        <a id="nav-day-view"
           class="nav-link"
           href="#"
           :class="{ active: isDayView }"
           @click="dayView">
          Day
        </a>
      </li>
      <li class="nav-item">
        <a id="nav-week-view"
           class="nav-link"
           href="#"
           :class="{ active: isWeekView }"
           @click="weekView">
          Week
        </a>
      </li>
      <li class="nav-item">
        <a id="nav-month-view"
           class="nav-link"
           href="#"
           :class="{ active: isMonthView }"
           @click="monthView">
          Month
        </a>
      </li>
    </ul>
  </nav>
  <AllEventsView :events="events" :is-current-view="isAllEventsView" />
  <DayView :events="groups" :today="today" :is-current-view="isDayView" />
  <WeekView :events="groups" :today="today" :is-current-view="isWeekView" />
  <MonthView :events="groups" :today="today" :is-current-view="isMonthView" />
</template>

<style scoped>
</style>
