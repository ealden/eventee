<script setup>
import { ref, computed, onMounted } from 'vue'
import axios from 'axios'

import { groupEvents } from './common/events.js'
import AllEventsView from './components/AllEventsView.vue'
import DayView from './components/DayView.vue'
import WeekView from './components/WeekView.vue'
import MonthView from './components/MonthView.vue'

const props = defineProps(['today', 'view'])

const events = ref([])

const today = ref(props.today)

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
  return groupEvents(events.value)
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
  today.value = new Date('2024-06-18')
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
  <AllEventsView :events="events"
                 :is-current-view="isAllEventsView" />
  <DayView :events="groups"
           :today="today"
           :is-current-view="isDayView"
           v-if="today" />
  <WeekView :events="groups"
            :today="today"
            :is-current-view="isWeekView"
            v-if="today" />
  <MonthView :events="groups"
             :today="today"
             :is-current-view="isMonthView"
             v-if="today" />
</template>

<style scoped>
</style>
