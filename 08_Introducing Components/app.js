const app = Vue.createApp({
  data() {
    return {
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
});

app.component("friend-contact", {
  template: `
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDetails()">{{ visibleToggle }}</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{ friend.phone }}</li>
      <li><strong>Email:</strong> {{ friend.email }}</li>
    </ul>
  </li>
  `,
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "diego",
        name: "Diego Ribeiro",
        phone: "11 1 2345 6789",
        email: "asdkj@dskd.com",
      },
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
