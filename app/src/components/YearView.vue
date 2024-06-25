<script setup>
import { ref, computed } from 'vue'

import { yearFrom, formatYearHeader } from '../common/dates.js'
import { yearCalendar } from '../common/calendars.js'
import ViewHeader from './ViewHeader.vue'
import YearMonthCalendar from './YearMonthCalendar.vue'

const props = defineProps(['events', 'today'])

const today = ref(props.today)

const currentDate = defineModel()

const header = computed(() => {
  return formatYearHeader(currentDate.value)
})

const calendar = computed(() => {
  return yearCalendar(currentDate.value)
})

function prevYear() {
  currentDate.value = yearFrom(currentDate.value, -1)
}

function thisYear() {
  currentDate.value = today.value
}

function nextYear() {
  currentDate.value = yearFrom(currentDate.value, 1)
}
</script>

<template>
  <div id="year-view">
    <ViewHeader :header="header"
                :prev-action="prevYear"
                :this-action="thisYear"
                :next-action="nextYear" />
    <div id="year" class="container">
      <div class="row">
        <YearMonthCalendar month="1"
                           :events="events"
                           :calendar="calendar"
                           header="January" />
        <YearMonthCalendar month="2"
                           :events="events"
                           :calendar="calendar"
                           header="February" />
        <YearMonthCalendar month="3"
                           :events="events"
                           :calendar="calendar"
                           header="March" />
      </div>
      <div class="row mt-3">
        <YearMonthCalendar month="4"
                           :events="events"
                           :calendar="calendar"
                           header="April" />
        <YearMonthCalendar month="5"
                           :events="events"
                           :calendar="calendar"
                           header="May" />
        <YearMonthCalendar month="6"
                           :events="events"
                           :calendar="calendar"
                           header="June" />
      </div>
      <div class="row mt-3">
        <YearMonthCalendar month="7"
                           :events="events"
                           :calendar="calendar"
                           header="July" />
        <YearMonthCalendar month="8"
                           :events="events"
                           :calendar="calendar"
                           header="August" />
        <YearMonthCalendar month="9"
                           :events="events"
                           :calendar="calendar"
                           header="September" />
      </div>
      <div class="row mt-3">
        <YearMonthCalendar month="10"
                           :events="events"
                           :calendar="calendar"
                           header="October" />
        <YearMonthCalendar month="11"
                           :events="events"
                           :calendar="calendar"
                           header="November" />
        <YearMonthCalendar month="12"
                           :events="events"
                           :calendar="calendar"
                           header="December" />
      </div>
    </div>
  </div>
</template>
