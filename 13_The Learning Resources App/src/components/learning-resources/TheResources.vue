<template>
  <base-card>
    <base-button 
      @click="setSelectedTab('stored-resources')"
      :mode="storedResButtonMode">Stored Resources</base-button>
    <base-button 
      @click="setSelectedTab('add-resource')"
      :mode="addResButtonMode">Add Resource</base-button>
  </base-card>
  <keep-alive>
    <component :is="seletedTab"></component>
  </keep-alive>
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
      resources: this.storedResources,
      addResource: this.addResource,
      removeResource: this.removeResource
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
    },
    addResource(title, description, link) {
      const newResource = {
        id: new Date().toISOString(),
        title, description, link
      }
      this.storedResources.unshift(newResource);
      this.seletedTab = 'stored-resources';
    },
    removeResource(resId) {
      const resIndex = this.storedResources.findIndex(res => res.id === resId);
      this.storedResources.splice(resIndex, 1);
    }
  },
}
</script>