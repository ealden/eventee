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
    isDayView() {
      return (this.view == 1)
    },
    isWeekView() {
      return (this.view == 2)
    },
    isMonthView() {
      return (this.view == 3)
    },
    weekStart() {
      const startDate = new Date()
      startDate.setUTCFullYear(this.today.getUTCFullYear())
      startDate.setUTCMonth(this.today.getUTCMonth())
      startDate.setUTCDate(this.today.getUTCDate() - this.today.getUTCDay())

      return startDate
    },
    week() {
      const startDate = this.weekStart

      const week = []

      for (let i = 0; i < 7; i++) {
        const date = new Date(startDate)
        date.setUTCDate(startDate.getUTCDate() + i)

        week.push(this.formatDate(date))
      }

      return week
    },
    weekEvents() {
      const groups = {}

      for (event of this.events) {
        const date = this.formatDate(event.starts_at)
        const time = this.formatTime(event.starts_at)

        const key = this.weekKey(date, time)

        if (!Object.hasOwn(groups, key)) {
          groups[key] = []
        }

        groups[key].push(event)
      }

      return groups
    },
    monthStart() {
      const startDate = new Date()
      startDate.setUTCFullYear(this.today.getUTCFullYear())
      startDate.setUTCMonth(this.today.getUTCMonth())
      startDate.setUTCDate(1)

      return startDate
    },
    monthEnd() {
      const endDate = new Date(this.monthStart)
      endDate.setUTCMonth(this.monthStart.getUTCMonth() + 1)
      endDate.setUTCDate(0)

      return endDate
    },
    month() {
      const startDate = this.monthStart
      const endDate = this.monthEnd

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
    dayView() {
      this.view = 1
    },
    weekView() {
      this.view = 2
    },
    monthView() {
      this.view = 3
    },
    prevWeek() {
      const date = new Date(this.weekStart)
      date.setUTCDate(this.weekStart.getUTCDate() - 7)

      this.today = date
    },
    thisWeek() {
      this.today = new Date()
    },
    nextWeek() {
      const date = new Date(this.weekStart)
      date.setUTCDate(this.weekStart.getUTCDate() + 7)

      this.today = date
    },
    weekKey(date, time) {
      return (date + 'T' + time)
    },
    prevMonth() {
      const date = new Date(this.today)
      date.setUTCMonth(this.today.getUTCMonth() - 1)
      date.setUTCDate(1)

      this.today = date
    },
    thisMonth() {
      this.today = new Date()
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
    formatHour(hour) {
      return ((hour - 1).toString().padStart(2, 0) + ':00')
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
