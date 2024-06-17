const Eventee = {
  data() {
    return {
      events: [],
      view: 0
    }
  },
  computed: {
    isAllEvents() {
      return (this.view == 0)
    },
    isMonthView() {
      return (this.view == 3)
    },
    groupedEvents() {
      const groups = {}

      for (event of this.events) {
        const date = this.formatDate(event.starts_at)

        if (!Object.hasOwn(groups, date)) {
          groups[date] = []
        }

        groups[date].push(event)
      }

      return groups
    },
    month() {
      const startDate = new Date()
      startDate.setUTCFullYear(2024)
      startDate.setUTCMonth(6 - 1)
      startDate.setUTCDate(1)

      const endDate = new Date(startDate)
      endDate.setUTCMonth(startDate.getUTCMonth() + 1)
      endDate.setUTCDate(0)

      let week = []

      for (let i = 0; i < startDate.getUTCDay(); i++) {
        week.push(null)
      }

      const month = []

      for (let i = 1; i <= endDate.getUTCDate(); i++) {
        const date = new Date(startDate)
        date.setUTCDate(i)

        week.push(this.formatDate(date))

        if (week.length == 7) {
          month.push(week)

          week = []
        }
      }

      if (week.length > 0) {
        while (week.length < 7) {
          week.push(null)
        }

        month.push(week)
      }

      return month
    }
  },
  methods: {
    allEvents() {
      this.view = 0
    },
    monthView() {
      this.view = 3
    },
    fetchEvents() {
      axios
        .get('/api/events')
        .then(response => {
          this.events = response.data
        })
    },
    formatDate(date) {
      return new Date(date)
        .toISOString()
        .split('T')[0]
    },
    formatTime(date) {
      return new Date(date)
        .toISOString()
        .split('T')[1]
        .replace(':00.000Z', '')
    },
    formatDay(date) {
      return new Date(date).getUTCDate()
    }
  },
  mounted() {
    this.fetchEvents()
  }
}

Vue.createApp(Eventee).mount('#app')
