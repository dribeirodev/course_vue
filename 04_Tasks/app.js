const app = Vue.createApp({
  data() {
    return {
      classUser: "",
      visible: true,
      colorInput: "",
    };
  },
  computed: {
    classesP() {
      return [this.classUser, this.visible ? "visible" : "hidden"];
    },
  },
  methods: {
    setClassUser(e) {
      this.classUser = e.target.value;
    },
    toggleVisible() {
      this.visible = !this.visible;
    },
    setColorInput(e) {
      this.colorInput = e.targer.value;
    },
  },
});

app.mount("#assignment");
