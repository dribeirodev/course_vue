<template>
  <form @submit.prevent="send">
    <div>
      <label>Nome</label>
      <input type="text" v-model="enteredName">
    </div>
    <div>
      <label>Idade</label>
      <input type="number" v-model="enteredAge">
    </div>
    <button>Send</button>
  </form>
</template>

<script>
export default {
  emits: ['send-user'],
  data() {
    return {
      enteredName: '',
      enteredAge: '',
    }
  },
  methods: {
    send() {
      this.$emit('send-user', this.enteredName, this.enteredAge);
    }
  },
}
</script>