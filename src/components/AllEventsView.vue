<script setup>
import { formatDate, formatTime } from '../common/format.js'

defineProps(['events', 'isCurrentView'])
</script>

<template>
  <div id="all-events-view" v-if="isCurrentView">
    <h2>All Events</h2>
    <table class="table">
      <thead>
        <tr>
          <th>Summary</th>
          <th>Starts At</th>
          <th>Ends At</th>
        </tr>
      </thead>
      <tbody>
        <tr class="event" v-for="event in events">
          <td class="summary">
            {{ event.summary }}
          </td>
          <td class="starts_at">
            {{ formatDate(event.starts_at) }} {{ formatTime(event.starts_at) }}
          </td>
          <td class="ends_at">
            {{ formatDate(event.ends_at) }} {{ formatTime(event.ends_at) }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
