const app = Vue.createApp({
  data() {
    return {
      yourName: "Diego Ribeiro",
      yourAge: 33,
      img: "https://miro.medium.com/max/900/1*OrjCKmou1jT4It5so5gvOA.jpeg",
    };
  },
  methods: {
    yourAgeAdd() {
      return this.yourAge + 5;
    },
    numberFavorite() {
      return Math.floor(Math.random() * 10);
    },
  },
});

app.mount("#assignment");
