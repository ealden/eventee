<script setup>
import { ref, computed } from 'vue'

import { yearFrom, formatYearHeader } from '../common/dates.js'
import { yearCalendar } from '../common/calendars.js'
import ViewHeader from './ViewHeader.vue'
import YearMonthCalendar from './YearMonthCalendar.vue'

const props = defineProps(['today'])

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
        <YearMonthCalendar month="1" :calendar="calendar[1]" header="January" />
        <YearMonthCalendar month="2" :calendar="calendar[2]" header="February" />
        <YearMonthCalendar month="3" :calendar="calendar[3]" header="March" />
      </div>
      <div class="row mt-3">
        <YearMonthCalendar month="4" :calendar="calendar[4]" header="April" />
        <YearMonthCalendar month="5" :calendar="calendar[5]" header="May" />
        <YearMonthCalendar month="6" :calendar="calendar[6]" header="June" />
      </div>
      <div class="row mt-3">
        <YearMonthCalendar month="7" :calendar="calendar[7]" header="July" />
        <YearMonthCalendar month="8" :calendar="calendar[8]" header="August" />
        <YearMonthCalendar month="9" :calendar="calendar[9]" header="September" />
      </div>
      <div class="row mt-3">
        <YearMonthCalendar month="10" :calendar="calendar[10]" header="October" />
        <YearMonthCalendar month="11" :calendar="calendar[11]" header="November" />
        <YearMonthCalendar month="12" :calendar="calendar[12]" header="December" />
      </div>
    </div>
  </div>
</template>
