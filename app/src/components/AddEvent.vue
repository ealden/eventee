<script setup>
import { ref } from 'vue'
import axios from 'axios'

const emit = defineEmits(['after-create'])

const event = ref({})

function submit() {
  const url = import.meta.env.VITE_API_HOST + '/api/events'

  axios
    .post(url, event.value)
    .then(response => {
      emit('after-create')
    })
}
</script>

<template>
  <div id="add-event">
    <div class="container mb-1">
      <div class="row">
        <div class="col">
          <h2 id="header">
            Add Event
          </h2>
        </div>
      </div>
    </div>
    <form>
      <div class="container">
        <div class="row mb-2">
          <div class="col-4">
            <div class="row">
              <div class="col">
                <label class="form-label"
                       for="summary">
                  Summary
                </label>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <input id="summary"
                       type="input"
                       class="form-control"
                       v-model="event.summary">
              </div>
            </div>
          </div>
        </div>
        <div class="row mb-2">
          <div class="col-4">
            <div class="row">
              <div class="col">
                <label class="form-label"
                       for="starts_at">
                  Starts At
                </label>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <input id="starts_at"
                       type="datetime-local"
                       class="form-control"
                       v-model="event.starts_at">
              </div>
            </div>
          </div>
        </div>
        <div class="row mb-2">
          <div class="col-4">
            <div class="row">
              <div class="col">
                <label class="form-label"
                       for="ends_at">
                  Ends At
                </label>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <input id="ends_at"
                       type="datetime-local"
                       class="form-control"
                       v-model="event.ends_at">
              </div>
            </div>
          </div>
        </div>
        <div class="row mb-2">
          <div class="col-4">
            <button id="submit"
                    type="submit"
                    class="btn btn-primary"
                    @click.prevent="submit">
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
