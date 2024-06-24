<script setup>
import { ref, computed } from 'vue'

import { monthFrom, formatTime, formatDateTime, formatDay, formatMonthViewHeader } from '../common/dates.js'
import { monthCalendar } from '../common/calendars.js'

const props = defineProps(['events', 'today', 'isCurrentView'])

const today = ref(props.today)

const currentDate = ref(today.value)

const header = computed(() => {
  return formatMonthViewHeader(currentDate.value)
})

const calendar = computed(() => {
  return monthCalendar(currentDate.value)
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
    <div class="container mb-1">
      <div class="row">
        <div class="col">
          <h2 id="current-period">
            {{ header }}
          </h2>
        </div>
        <div class="col text-end">
          <div class="btn-group" role="group" aria="Calendar Navigation">
            <button id="prev-month"
                    type="button"
                    class="btn btn-sm btn-outline-secondary px-2"
                    @click="prevMonth">
              ◀
            </button>
            <button id="this-month"
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                    @click="thisMonth">
              Today
            </button>
            <button id="next-month"
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                    @click="nextMonth">
              ▶
            </button>
          </div>
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
          <div class="col border"
               :id="date"
               v-for="date in week">
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
