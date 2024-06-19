<script setup>
import { formatDate, formatTime, formatMonthYear, formatDay } from '../common/format.js'
import { ref, computed } from 'vue'

const props = defineProps(['events', 'today', 'isCurrentView'])

const today = ref(props.today)

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
</script>

<template>
  <div id="month-view" v-if="isCurrentView">
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
                 v-for="event in events[date]">
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
