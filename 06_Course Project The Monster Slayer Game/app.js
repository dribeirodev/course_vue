function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      playerhealth: 100,
      monsterHealth: 100,
    };
  },
  methods: {
    attackMonster() {
      const attackValue = getRandomValue(5, 12);
      this.monsterHealth -= attackValue;
    },
    attackPlayer() {
      const attackValue = getRandomValue(8, 15);
      this.playerhealth -= attackValue;
    },
  },
});

app.mount("#game");
