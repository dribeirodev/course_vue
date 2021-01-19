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
      return {
        user1: this.classUser === "user1",
        user2: this.classUser === "user2",
        visible: this.visible,
        hidden: !this.visible,
      };
    },
  },
  methods: {
    toggleVisible() {
      this.visible = !this.visible;
    },
  },
});

app.mount("#assignment");
