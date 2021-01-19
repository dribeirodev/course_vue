const app = Vue.createApp({
  data() {
    return {
      item: "",
      list: [],
      visibleList: true,
    };
  },
  methods: {
    addItemList() {
      this.list.push(this.item);
    },
    listVisible() {
      this.visibleList = !this.visibleList;
    },
  },
});

app.mount("#assignment");
