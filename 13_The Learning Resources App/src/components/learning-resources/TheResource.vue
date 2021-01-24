<template>
  <base-card>
    <base-button @click="setSelectedTab('stored-resources')">Stored Resources</base-button>
    <base-button @click="setSelectedTab('add-resource')">Add Resource</base-button>
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
    }
  },
  methods: {
    setSelectedTab(tab) {
      this.seletedTab = tab;
    }
  },
}
</script>