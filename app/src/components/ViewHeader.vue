<script setup>
defineProps(['header', 'prevAction', 'thisAction', 'nextAction'])
</script>

<template>
  <div class="container mb-1">
    <div class="row">
      <div class="col">
        <h2 id="current-period">
          {{ header }}
        </h2>
      </div>
      <div class="col text-end">
        <div class="btn-group" role="group" aria="Calendar Navigation">
          <button id="prev-period"
                  type="button"
                  class="btn btn-sm btn-outline-secondary px-2"
                  @click="prevAction">
            ◀
          </button>
          <button id="this-period"
                  type="button"
                  class="btn btn-sm btn-outline-secondary"
                  @click="thisAction">
            Today
          </button>
          <button id="next-period"
                  type="button"
                  class="btn btn-sm btn-outline-secondary"
                  @click="nextAction">
            ▶
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
