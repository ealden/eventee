const Eventee = {
  data() {
    return {
      events: [],
      today: new Date(),
      view: 0
    }
  },
  computed: {
    isAllEventsView() {
      return (this.view == 0)
    },
    isWeekView() {
      return (this.view == 2)
    },
    isMonthView() {
      return (this.view == 3)
    },
    week() {
      return [
        '2024-06-16',
        '2024-06-17',
        '2024-06-18',
        '2024-06-19',
        '2024-06-20',
        '2024-06-21',
        '2024-06-22'
      ]
    },
    monthStart() {
      const startDate = new Date()
      startDate.setUTCFullYear(this.today.getUTCFullYear())
      startDate.setUTCMonth(this.today.getUTCMonth())
      startDate.setUTCDate(1)

      return startDate
    },
    endMonth() {
      const endDate = new Date(this.monthStart)
      endDate.setUTCMonth(this.monthStart.getUTCMonth() + 1)
      endDate.setUTCDate(0)

      return endDate
    },
    month() {
      const startDate = this.monthStart
      const endDate = this.endMonth

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
    },
    monthEvents() {
      const groups = {}

      for (event of this.events) {
        const date = this.formatDate(event.starts_at)

        if (!Object.hasOwn(groups, date)) {
          groups[date] = []
        }

        groups[date].push(event)
      }

      return groups
    }
  },
  methods: {
    allEventsView() {
      this.view = 0
    },
    weekView() {
      this.view = 2
    },
    monthView() {
      this.view = 3
    },
    prevMonth() {
      const date = new Date(this.today)
      date.setUTCMonth(this.today.getUTCMonth() - 1)
      date.setUTCDate(1)

      this.today = date
    },
    nextMonth() {
      const date = new Date(this.today)
      date.setUTCMonth(this.today.getUTCMonth() + 1)
      date.setUTCDate(1)

      this.today = date
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
    formatMonthYear(date) {
      const MONTHS = {
        1: 'January',
        2: 'February',
        3: 'March',
        4: 'April',
        5: 'May',
        6: 'June',
        7: 'July',
        8: 'August',
        9: 'September',
        10: 'October',
        11: 'November',
        12: 'December'
      }

      const dateObject = new Date(date)

      const month = MONTHS[dateObject.getUTCMonth() + 1]
      const year = dateObject.getUTCFullYear()

      return month + ' ' + year

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
