const Eventee = {
  data() {
    return {
      events: [],
      view: 0,
      month: {
        startDay: 7,
        days: 30
      }
    };
  },
  computed: {
    isAllEvents() {
      return (this.view == 0)
    },
    isMonthView() {
      return (this.view == 3)
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
          this.events = response.data;
        });
    },
    formatDate(date) {
      return date
        .replace('T', ' ')
        .replace('.000Z', ' UTC');
    },
  },
  mounted() {
    this.fetchEvents();
  }
};

Vue.createApp(Eventee).mount('#app');
