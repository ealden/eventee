<script setup>
import { formatDateTime } from '../common/dates.js'
import ViewHeader from './ViewHeader.vue'

defineProps(['events'])
</script>

<template>
  <div id="all-events-view">
    <ViewHeader header="All Events" />
    <table class="table mx-1">
      <thead>
        <tr>
          <th>Event</th>
          <th>Starts At</th>
          <th>Ends At</th>
        </tr>
      </thead>
      <tbody>
        <tr class="event px-1"
            v-for="event in events">
          <td class="summary" width="60%">
            {{ event.summary }}
          </td>
          <td class="starts_at" width="20%">
            {{ formatDateTime(event.starts_at) }}
          </td>
          <td class="ends_at" width="20%">
            {{ formatDateTime(event.ends_at) }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
