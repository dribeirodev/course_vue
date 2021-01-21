<template>
  <li>
    <h2>{{ name }}</h2>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{ phoneNumber }}</li>
      <li><strong>Email:</strong> {{ emailAddress }}</li>
    </ul>
  </li>
</template>
<script>
export default {
  props: [
    "name",
    "phoneNumber",
    "emailAddress"
  ],
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id:'diego',
        name: 'Diego Souza',
        phone: '1234 5678 90',
        email: 'aksjas@localhost.com'
      },
    }
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    }
  },
}
</script>