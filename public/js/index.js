const Eventee = {
  data() {
    return {
      events: [],
      view: 0,
      month: [
        [ null, null, null, null, null, null, '2024-06-01' ],
        [ '2024-06-02', '2024-06-03', '2024-06-04', '2024-06-05', '2024-06-06', '2024-06-07', '2024-06-08' ],
        [ '2024-06-09', '2024-06-10', '2024-06-11', '2024-06-12', '2024-06-13', '2024-06-14', '2024-06-15' ],
        [ '2024-06-16', '2024-06-17', '2024-06-18', '2024-06-19', '2024-06-20', '2024-06-21', '2024-06-22' ],
        [ '2024-06-23', '2024-06-24', '2024-06-25', '2024-06-26', '2024-06-27', '2024-06-28', '2024-06-29' ],
        [ '2024-06-30', null, null, null, null, null, null ]
      ]
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
