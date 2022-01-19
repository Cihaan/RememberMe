<template>
  <base-card>
    <base-button
      @click="setSelectedTab('stored-ressources')"
      :mode="storedResButtonMode"
      >Stored Ressources</base-button
    >
    <base-button
      @click="setSelectedTab('add-ressources')"
      :mode="addResButtonMode"
      >Add Ressource</base-button
    >
    <component :is="selectedTab"></component>
  </base-card>
</template>
<script>
import StoredRessources from './StoredRessources.vue';
import AddRessources from './AddRessources.vue';

export default {
  components: {
    StoredRessources,
    AddRessources,
  },
  data() {
    return {
      selectedTab: 'stored-ressources',
      storedRessources: [
        {
          id: 'official-guide',
          tittle: 'Official Guide',
          description: 'The official VueJS documentation.',
          link: 'https://vuejs.org',
        },
        {
          id: 'google',
          tittle: 'Google',
          description: 'Find everything.',
          link: 'https://google.org',
        },
      ],
    };
  },
  computed: {
    storedResButtonMode() {
      return this.selectedTab === 'stored-ressources' ? null : 'flat';
    },
    addResButtonMode() {
      return this.selectedTab === 'add-ressources' ? null : 'flat';
    },
  },
  provide() {
    return {
      ressources: this.storedRessources,
    };
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
  },
};
</script>

<style scoped></style>
