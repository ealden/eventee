<script setup>
import axios from 'axios'

function submit() {
  const url = import.meta.env.VITE_API_HOST + '/api/events'
  const event = {}

  axios
    .post(url, event)
    .then(response => {
      location.href = '/?event=new'
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
                       class="form-control">
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
                       class="form-control">
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
                       class="form-control">
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
