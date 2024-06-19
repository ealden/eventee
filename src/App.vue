<script setup>
import { formatDate, formatTime, formatDateTime, formatHour, formatDateToday, formatMonthYear, formatDay } from './common/format.js'
import { ref, computed, onMounted } from 'vue'
import axios from 'axios'

const events = ref([])

const today = ref(new Date('2024-06-18'))

const view = ref(0)

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
    const time = formatTime(event.starts_at)

    const dateTime = formatDateTime(date, time)

    if (!Object.hasOwn(groups, date)) {
      groups[date] = []
    }

    if (!Object.hasOwn(groups, dateTime)) {
      groups[dateTime] = []
    }

    groups[date].push(event)
    groups[dateTime].push(event)
  }

  return groups
})

const week = computed(() => {
  const startDate = new Date()
  startDate.setUTCFullYear(today.value.getUTCFullYear())
  startDate.setUTCMonth(today.value.getUTCMonth())
  startDate.setUTCDate(today.value.getUTCDate() - today.value.getUTCDay())

  const week = []

  for (let i = 0; i < 7; i++) {
    const date = new Date(startDate)
    date.setUTCDate(date.getUTCDate() + i)

    week.push(formatDate(date))
  }

  return week
})

const month = computed(() => {
  const startDate = new Date()
  startDate.setUTCFullYear(today.value.getUTCFullYear())
  startDate.setUTCMonth(today.value.getUTCMonth())
  startDate.setUTCDate(1)

  const endDate = new Date(startDate)
  endDate.setUTCMonth(endDate.getUTCMonth() + 1)
  endDate.setUTCDate(0)

  let week = []

  for (let i = 0; i < startDate.getUTCDay(); i++) {
    week.push(null)
  }

  const month = []

  for (let i = 1; i <= endDate.getUTCDate(); i++) {
    const date = new Date(startDate)
    date.setUTCDate(i)

    week.push(formatDate(date))

    if (week.length == 7) {
      month.push(week)

      week = []
    }
  }

  if (week.length > 0) {
    while (week.length < 7) {
      week.push(null)
    }

    month.push(week)
  }

  return month
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

function prevWeek() {
  const date = new Date(today.value)
  date.setUTCDate(date.getUTCDate() - 7)

  today.value = date
}

function thisWeek() {
  today.value = new Date()
}

function nextWeek() {
  const date = new Date(today.value)
  date.setUTCDate(date.getUTCDate() + 7)

  today.value = date
}

function prevMonth() {
  const date = new Date(today.value)
  date.setUTCMonth(date.getUTCMonth() - 1)
  date.setUTCDate(1)

  today.value = date
}

function thisMonth() {
  today.value = new Date()
}

function nextMonth() {
  const date = new Date(today.value)
  date.setUTCMonth(date.getUTCMonth() + 1)
  date.setUTCDate(1)

  today.value = date
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
  <div id="all-events-view" v-if="isAllEventsView">
    <h2>All Events</h2>
    <table class="table">
      <thead>
        <tr>
          <th>Summary</th>
          <th>Starts At</th>
          <th>Ends At</th>
        </tr>
      </thead>
      <tbody>
        <tr class="event" v-for="event in events">
          <td class="summary">
            {{ event.summary }}
          </td>
          <td class="starts_at">
            {{ formatDate(event.starts_at) }} {{ formatTime(event.starts_at) }}
          </td>
          <td class="ends_at">
            {{ formatDate(event.ends_at) }} {{ formatTime(event.ends_at) }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div id="day-view" v-if="isDayView">
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
                 v-for="event in groups[formatDateTime(formatDate(today), formatHour(hour))]">
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
  <div id="week-view" v-if="isWeekView">
    <div class="container">
      <div class="row">
        <div class="col">
          <h2 class="current-period">{{ formatMonthYear(today) }}</h2>
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
                 v-for="event in groups[formatDateTime(date, formatHour(hour))]">
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
  <div id="month-view" v-if="isMonthView">
    <div class="container">
      <div class="row">
        <div class="col">
          <h2 class="current-period">{{ formatMonthYear(today) }}</h2>
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
      <template v-for="week in month">
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
                 v-for="event in groups[date]">
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

<style scoped>
</style>
