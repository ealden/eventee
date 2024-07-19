<script setup>
import { ref, computed } from 'vue'

import { formatTime, formatDateTime } from '../common/dates.js'

const props = defineProps(['event', 'total', 'index'])

const event = ref(props.event)

const total = ref(props.total)

const index = ref(props.index)

const duration = computed(() => {
  const startsAt = new Date(event.value.starts_at)
  const endsAt = new Date(event.value.ends_at)

  const diff = endsAt.getTime() - startsAt.getTime()

  return diff / 1000 / 60 / 60
})

const style = computed(() => {
  const width = 100 / total.value
  const height = 50 * duration.value
  const left = width * index.value

  return {
    width: width + '%',
    height: height + 'px',
    left: left + '%'
  }
})
</script>

<template>
  <div class="position-absolute col event border border-primary bg-primary-subtle bg-gradient px-1"
       :style="style">
    <div class="hour">
      {{ formatTime(event.starts_at) }}
    </div>
    <div class="summary">
      <strong>{{ event.summary }}</strong>
    </div>
    <span class="starts_at visually-hidden">
      {{ formatDateTime(event.starts_at) }}
    </span>
    <span class="ends_at visually-hidden">
      {{ formatDateTime(event.ends_at) }}
    </span>
  </div>
</template>
