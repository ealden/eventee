<script setup>
import Event from './Event.vue'

defineProps(['events'])
</script>

<template>
  <div class="row">
    <Event v-for="event in events"
           :key="event.id"
           :event="event" />
  </div>
</template>
