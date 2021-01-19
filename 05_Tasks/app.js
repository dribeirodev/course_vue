const app = Vue.createApp({
  data() {
    return {
      item: "",
      list: [],
      visibleList: true,
    };
  },
  computed: {
    buttonCaption() {
      return this.visibleList ? "Hide List" : "Show List";
    },
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
