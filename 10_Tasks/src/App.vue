<template>
  <section>
    <h2>User</h2>
    <user-data @send-user="sendUser"></user-data>
    <user-active 
      :name="user.name"
      :age="user.age"
    ></user-active>
  </section>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: 'Diego',
        age: 33
      }
    }
  },
  methods: {
    sendUser(name, age) {
      this.user = {
        name, age: +age
        // o + converte o valor para number
      }
    }
  },
}
</script>