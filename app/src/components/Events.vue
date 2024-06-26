<script setup>
import Event from './Event.vue'

defineProps(['events'])
</script>

<template>
  <div class="position-relative row">
    <Event v-for="(event, i) in events"
           :key="event.id"
           :event="event"
           :total="events.length"
           :index="i" />
  </div>
</template>
