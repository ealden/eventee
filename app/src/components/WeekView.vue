<script setup>
import { ref, computed } from 'vue'

import { weekFrom, formatTime, formatDay, formatMonthViewHeader } from '../common/dates.js'
import { weekCalendar } from '../common/calendars.js'
import ViewHeader from './ViewHeader.vue'
import Event from './Event.vue'

const props = defineProps(['events', 'today'])

const today = ref(props.today)

const currentDate = defineModel()

const header = computed(() => {
  return formatMonthViewHeader(currentDate.value)
})

const calendar = computed(() => {
  return weekCalendar(currentDate.value)
})

const days = computed(() => {
  const week = calendar.value[0]

  return {
    'Sun': formatDay(week[0]),
    'Mon': formatDay(week[1]),
    'Tue': formatDay(week[2]),
    'Wed': formatDay(week[3]),
    'Thu': formatDay(week[4]),
    'Fri': formatDay(week[5]),
    'Sat': formatDay(week[6])
  }
})

function prevWeek() {
  currentDate.value = weekFrom(currentDate.value, -1)
}

function thisWeek() {
  currentDate.value = today.value
}

function nextWeek() {
  currentDate.value = weekFrom(currentDate.value, 1)
}
</script>

<template>
  <div id="week-view">
    <ViewHeader :header="header"
                :prev-action="prevWeek"
                :this-action="thisWeek"
                :next-action="nextWeek" />
    <div id="week" class="container">
      <div class="row text-center">
        <div class="col-1">
          &nbsp;
        </div>
        <div class="col"
             v-for="(value, label) in days"
             :key="value">
          <strong>{{ label }}</strong>
          <span class="day ms-1">
            <strong>{{ value }}</strong>
          </span>
        </div>
      </div>
      <div class="row event-row"
           v-for="hour in calendar"
           :key="hour">
        <div class="col-1 border text-end">
          {{ formatTime(hour[0]) }}
        </div>
        <div class="col border"
             v-for="dateTime in hour"
             :key="dateTime">
          <div class="position-relative row">
            <Event v-for="(event, i) in events[dateTime]"
                   :key="event.id"
                   :event="event"
                   :total="events.length"
                   :index="i" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.event-row {
  height: 50px;
}
</style>
