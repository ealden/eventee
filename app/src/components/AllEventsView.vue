<script setup>
import { formatDateTime } from '../common/dates.js'

defineProps(['events', 'isCurrentView'])
</script>

<template>
  <div id="all-events-view" v-if="isCurrentView">
    <div class="container">
      <div class="row">
        <div class="col">
          <h2 id="currentPeriod">
            All Events
          </h2>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <table class="table">
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
      </div>
    </div>
  </div>
</template>
