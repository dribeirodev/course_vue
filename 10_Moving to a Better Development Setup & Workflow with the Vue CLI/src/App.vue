<template>
  <section>
    <h2>My Friends</h2>
    <ul>
      <li></li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id:'diego',
          name: 'Diego Souza',
          phone: '1234 5678 90',
          email: 'aksjas@localhost.com'
        },
        {
          id:'ana',
          name: 'Ana Paula',
          phone: '2222 6666 78',
          email: 'paula@dsfg.com'
        }
      ]
    }
  },
}
</script>