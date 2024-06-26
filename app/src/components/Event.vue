<script setup>
import { formatDateTime } from '../common/dates.js'

defineProps(['event'])
</script>

<template>
  <div class="col event border border-primary bg-primary-subtle bg-gradient px-1">
    <span class="summary">
      {{ event.summary }}
    </span>
    <span class="starts_at visually-hidden">
      {{ formatDateTime(event.starts_at) }}
    </span>
    <span class="ends_at visually-hidden">
      {{ formatDateTime(event.ends_at) }}
    </span>
  </div>
</template>
