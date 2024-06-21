<script setup>
import { formatDateTime } from '../common/dates.js'

defineProps(['events', 'isCurrentView'])
</script>

<template>
  <div id="all-events-view" v-if="isCurrentView">
    <h2 id="currentPeriod">
      All Events
    </h2>
    <table class="table">
      <thead>
        <tr>
          <th>Summary</th>
          <th>Starts At</th>
          <th>Ends At</th>
        </tr>
      </thead>
      <tbody>
        <tr class="event"
            v-for="event in events">
          <td class="summary">
            {{ event.summary }}
          </td>
          <td class="starts_at">
            {{ formatDateTime(event.starts_at) }}
          </td>
          <td class="ends_at">
            {{ formatDateTime(event.ends_at) }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
