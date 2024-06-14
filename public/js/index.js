const Eventee = {
  data() {
    return {
      events: [],
    };
  },
  methods: {
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
