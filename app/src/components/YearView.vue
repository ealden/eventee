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
      <div class="row mb-3"
           v-for="i in 4">
        <YearMonthCalendar :events="events"
                           :calendar="calendar"
                           v-for="j in 3"
                           :month="(3 * (i - 1)) + j" />
      </div>
    </div>
  </div>
</template>
