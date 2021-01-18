const app = Vue.createApp({
  data() {
    return {
      value: 0,
    };
  },
  watch: {
    value() {
      const that = this;
      setTimeout(() => {
        that.value = 0;
      }, 5000);
    },
  },
  computed: {
    res() {
      let msg = "";
      if (this.value <= 37) {
        msg = "Not there yet";
      } else {
        msg = "Too much!";
      }
      return this.value + " " + msg;
    },
  },
  methods: {
    add(num) {
      this.value = this.value + num;
    },
  },
});

app.mount("#assignment");
