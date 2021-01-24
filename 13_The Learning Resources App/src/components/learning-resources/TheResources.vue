<template>
  <base-card>
    <base-button 
      @click="setSelectedTab('stored-resources')"
      :mode="storedResButtonMode">Stored Resources</base-button>
    <base-button 
      @click="setSelectedTab('add-resource')"
      :mode="addResButtonMode">Add Resource</base-button>
  </base-card>
  <component :is="seletedTab"></component>
</template>

<script>
import StoredResources from './StoredResources';
import AddResource from './AddResource'

export default {
  components: {
    StoredResources,
    AddResource
  },
  data() {
    return {
      seletedTab: 'stored-resources',
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue.js documentation.',
          link: 'https://vuejs.org'
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to google...',
          link: 'https://google.org'
        }
      ]
    }
  },
  provide() {
    return {
      resources: this.storedResources
    }
  },
  computed: {
    storedResButtonMode() {
      return this.seletedTab === 'stored-resources' ? null :'flat'
    },
    addResButtonMode() {
      return this.seletedTab === 'add-resource' ? null :'flat'
    }
  },
  methods: {
    setSelectedTab(tab) {
      this.seletedTab = tab;
    }
  },
}
</script>