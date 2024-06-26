<script setup>
import { ref, computed } from 'vue'

import { formatDateTime } from '../common/dates.js'

const props = defineProps(['event'])

const event = ref(props.event)

const duration = computed(() => {
  const startsAt = new Date(event.value.starts_at)
  const endsAt = new Date(event.value.ends_at)

  const diff = endsAt.getTime() - startsAt.getTime()

  return diff / 1000 / 60 / 60
})
</script>

<template>
  <div class="position-absolute col event border border-primary bg-primary-subtle bg-gradient px-1">
    <span class="summary">
      {{ event.summary }}
    </span>
    <span class="starts_at visually-hidden">
      {{ formatDateTime(event.starts_at) }}
    </span>
    <span class="ends_at visually-hidden">
      {{ formatDateTime(event.ends_at) }}
    </span>
    <span class="duration visually-hidden">
      {{ duration }}
    </span>
  </div>
</template>

<style scoped>
.col {
  height: calc(50px * v-bind(duration))
}
</style>
