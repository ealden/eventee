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
    groups() {
      const groups = {}

      for (event of this.events) {
        const date = this.formatDate(event.starts_at)
        const time = this.formatTime(event.starts_at)

        const dateTime = this.formatDateTime(date, time)

        if (!Object.hasOwn(groups, date)) {
          groups[date] = []
        }

        if (!Object.hasOwn(groups, dateTime)) {
          groups[dateTime] = []
        }

        groups[date].push(event)
        groups[dateTime].push(event)
      }

      return groups
    },
    week() {
      const startDate = new Date()
      startDate.setUTCFullYear(this.today.getUTCFullYear())
      startDate.setUTCMonth(this.today.getUTCMonth())
      startDate.setUTCDate(this.today.getUTCDate() - this.today.getUTCDay())

      const week = []

      for (let i = 0; i < 7; i++) {
        const date = new Date(startDate)
        date.setUTCDate(startDate.getUTCDate() + i)

        week.push(this.formatDate(date))
      }

      return week
    },
    month() {
      const startDate = new Date()
      startDate.setUTCFullYear(this.today.getUTCFullYear())
      startDate.setUTCMonth(this.today.getUTCMonth())
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
    },
    MONTHS() {
      return {
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
      const date = new Date(this.today)
      date.setUTCDate(this.today.getUTCDate() - 7)

      this.today = date
    },
    thisWeek() {
      this.today = new Date()
    },
    nextWeek() {
      const date = new Date(this.today)
      date.setUTCDate(this.today.getUTCDate() + 7)

      this.today = date
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
    formatDateTime(date, time) {
      return (date + 'T' + time)
    },
    formatHour(hour) {
      return ((hour - 1).toString().padStart(2, 0) + ':00')
    },
    formatDateToday(date) {
      const dateObject = new Date(date)

      const year = dateObject.getUTCFullYear()
      const month = this.MONTHS[dateObject.getUTCMonth() + 1]
      const day = dateObject.getUTCDate()

      return (month + ' ' + day + ', ' + year)
    },
    formatMonthYear(date) {
      const dateObject = new Date(date)

      const year = dateObject.getUTCFullYear()
      const month = this.MONTHS[dateObject.getUTCMonth() + 1]

      return (month + ' ' + year)

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
