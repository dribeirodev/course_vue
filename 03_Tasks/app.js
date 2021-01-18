const app = Vue.createApp({
  data() {
    return {
      value: 0,
    };
  },
  watch: {
    res() {
      const that = this;
      setTimeout(() => {
        that.value = 0;
      }, 5000);
    },
  },
  computed: {
    res() {
      let msg = "";
      if (this.value < 37) {
        return "Not there yet";
      } else if (this.value === 37) {
        return this.value;
      } else {
        return "Too much!";
      }
    },
  },
  methods: {
    add(num) {
      this.value = this.value + num;
    },
  },
});

app.mount("#assignment");
