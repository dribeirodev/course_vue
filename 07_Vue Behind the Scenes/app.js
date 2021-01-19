const app = Vue.createApp({
  data() {
    return {
      currentUserInput: "",
      message: "Vue is great!",
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.currentUserInput;
    },
  },
});

app.mount("#app");

const app2 = Vue.createApp({
  template: `<p>{{ favoriteMeal }}</p>`,
  data() {
    return {
      favoriteMeal: "Pizza",
    };
  },
});

app2.mount("#app2");

// no vue
const data = {
  message: "Hello!",
  longMessage: "Hello! World!",
};

const handler = {
  set(target, key, value) {
    // console.log(target, "target");
    // console.log(key, "key");
    // console.log(value, "value");
    if (key === "message") {
      target.longMessage = value + " World!";
    }
    target.message = value;
  },
};

const proxy = new Proxy(data, handler);

proxy.message = "Helo!!!!!";

console.log(proxy.longMessage, "fim");
