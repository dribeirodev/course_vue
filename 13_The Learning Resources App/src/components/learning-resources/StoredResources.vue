<template>
  <ul>
    <LearningResources 
      v-for="(res) in resources" 
      :key="res.id" 
      :res="res" />
  </ul>
</template>

<script>
import LearningResources from './LearningResources';

export default {
  components: {
    LearningResources
  },
  inject: ['resources']
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>