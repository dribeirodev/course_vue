const app = Vue.createApp({
  data() {
    return {
      value: "",
      value2: "",
    };
  },
  methods: {
    click() {
      alert("clicou");
    },
    setValue(e) {
      this.value = e.target.value;
    },
    setValue2(e) {
      this.value2 = e.target.value;
    },
  },
});

app.mount("#assignment");
