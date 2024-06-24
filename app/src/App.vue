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

const currentDate = ref(props.today)

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

function fetchToday() {
  axios
    .get(import.meta.env.VITE_API_HOST + '/api/today')
    .then(response => {
      const date = new Date(response.data.today)

      today.value = date
      currentDate.value = date
    })
}

function fetchEvents() {
  axios
    .get(import.meta.env.VITE_API_HOST + '/api/events')
    .then(response => {
      events.value = response.data
    })
}

onMounted(() => {
  if (!props.today) {
    fetchToday()
    fetchEvents()
  }
})
</script>

<template>
  <div class="bg-body-secondary p-2 mb-3">
    <div class="container">
      <div class="row align-items-center">
        <div class="col">
          <span class="fs-2">📆 Eventee</span>
        </div>
        <div class="col text-center">
          <div class="btn-group" role="group" aria-label="Navigation">
            <button id="nav-all-events-view"
                    type="button"
                    class="btn btn-outline-primary"
                    :class="{ active: isAllEventsView }"
                    @click="allEventsView">
              All
            </button>
            <button id="nav-day-view"
                    type="button"
                    class="btn btn-outline-primary"
                    :class="{ active: isDayView }"
                    @click="dayView">
              Day
            </button>
            <button id="nav-week-view"
                    type="button"
                    class="btn btn-outline-primary"
                    :class="{ active: isWeekView }"
                    @click="weekView">
              Week
            </button>
            <button id="nav-month-view"
                    type="button"
                    class="btn btn-outline-primary"
                    :class="{ active: isMonthView }"
                    @click="monthView">
              Month
            </button>
          </div>
        </div>
        <div class="col">&nbsp;</div>
      </div>
    </div>
  </div>
  <div class="container">
    <AllEventsView :events="events"
                   v-if="isAllEventsView" />
    <DayView :events="groups"
             :today="today"
             v-model="currentDate"
             v-if="isDayView" />
    <WeekView :events="groups"
              :today="today"
              v-model="currentDate"
              v-if="isWeekView" />
    <MonthView :events="groups"
               :today="today"
               v-model="currentDate"
               v-if="isMonthView" />
  </div>
</template>

<style scoped>
</style>
