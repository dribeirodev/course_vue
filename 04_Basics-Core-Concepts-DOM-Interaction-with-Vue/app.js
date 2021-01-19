const app = Vue.createApp({
  data() {
    return {
      boxASelect: false,
      boxBSelect: false,
      boxCSelect: false,
    };
  },
  methods: {
    boxSelect(box) {
      if (box === "A") {
        this.boxASelect = !this.boxASelect;
      } else if (box === "B") {
        this.boxBSelect = !this.boxBSelect;
      } else if (box === "C") {
        this.boxCSelect = !this.boxCSelect;
      }
    },
  },
});

app.mount("#styling");
