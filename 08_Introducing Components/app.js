const app = Vue.createApp({
  data() {
    return {
      detailsAreVisible: false,
      friends: [
        {
          id: "diego",
          name: "Diego Ribeiro",
          phone: "11 1 2345 6789",
          email: "asdkj@dskd.com",
        },
        {
          id: "ana",
          name: "Ana Paula Silva",
          phone: "99 9 1111 2211",
          email: "paulasd@dskd.com",
        },
      ],
    };
  },
  computed: {
    visibleToggle() {
      return this.detailsAreVisible ? "Hide Details" : "Show Details";
    },
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

app.mount("#app");
