<script setup>
import { ref, computed } from 'vue'

import { monthFrom, formatTime, formatDateTime, formatDay, formatMonthViewHeader } from '../common/dates.js'
import { monthCalendar } from '../common/calendars.js'
import ViewHeader from './ViewHeader.vue'

const props = defineProps(['events', 'today'])

const today = ref(props.today)

const currentDate = defineModel()

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
  <div id="month-view">
    <ViewHeader :header="header"
                :prev-action="prevMonth"
                :this-action="thisMonth"
                :next-action="nextMonth" />
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
      <div class="row" v-for="week in calendar">
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
          <div class="row event border border-primary bg-primary-subtle bg-gradient"
               :class="date"
               v-for="event in events[date]">
            <div class="col summary text-start px-1">
              {{ event.summary }}
            </div>
            <div class="col text-end px-1">
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
    </div>
  </div>
</template>
