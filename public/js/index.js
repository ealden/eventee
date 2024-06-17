const Eventee = {
  data() {
    return {
      events: [],
      view: 0,
      month: [
        [ null, null, null, null, null, null, 1 ],
        [  2,  3,  4,  5,  6,  7,  8 ],
        [  9, 10, 11, 12, 13, 14, 15 ],
        [ 16, 17, 18, 19, 20, 21, 22 ],
        [ 23, 24, 25, 26, 27, 28, 29 ],
        [ 30, null, null, null, null, null, null ]
      ]
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
