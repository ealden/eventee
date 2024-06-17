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
        const date = event.starts_at.split('T')[0]

        if (!Object.hasOwn(groups, date)) {
          groups[date] = []
        }

        groups[date].push(event)
      }

      return groups
    },
    month() {
      const startDate = new Date('2024-06-01')
      const endDate = new Date(startDate.getFullYear(), (startDate.getMonth() + 1), 0)

      let week = []

      for (let i = 0; i < startDate.getDay(); i++) {
        week.push(null)
      }

      const month = []

      for (let i = 0; i < endDate.getDate(); i++) {
        const m = (startDate.getMonth() + 1)
        const d = (i + 1)

        const yyyy = startDate.getFullYear()
        const mm = m.toString().padStart(2, 0)
        const dd = d.toString().padStart(2, 0)

        week.push(yyyy + "-" + mm + "-" + dd)

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
      return date
        .replace('T', ' ')
        .replace(':00.000Z', '')
    },
    formatTime(date) {
      return date
        .split('T')[1]
        .replace(':00.000Z', '')
    },
    getDay(dateString) {
      if (dateString) {
        return new Date(dateString).getDate()
      } else {
        return dateString
      }
    }
  },
  mounted() {
    this.fetchEvents()
  }
}

Vue.createApp(Eventee).mount('#app')
