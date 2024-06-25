<script setup>
import { monthCalendar } from '../common/calendars.js'
import ViewHeader from './ViewHeader.vue'
import YearMonthCalendar from './YearMonthCalendar.vue'

const calendar = {
  1: monthCalendar(new Date('2024-01-01')),
  2: monthCalendar(new Date('2024-02-01')),
  3: monthCalendar(new Date('2024-03-01')),
  4: monthCalendar(new Date('2024-04-01')),
  5: monthCalendar(new Date('2024-05-01')),
  6: monthCalendar(new Date('2024-06-01')),
  7: monthCalendar(new Date('2024-07-01')),
  8: monthCalendar(new Date('2024-08-01')),
  9: monthCalendar(new Date('2024-09-01')),
  10: monthCalendar(new Date('2024-10-01')),
  11: monthCalendar(new Date('2024-11-01')),
  12: monthCalendar(new Date('2024-12-01'))
}
</script>

<template>
  <div id="year-view">
    <ViewHeader header="2024" />
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
