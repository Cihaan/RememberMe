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
    <keep-alive>
      <component :is="selectedTab"></component>
    </keep-alive>
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
          title: 'Official Guide',
          description: 'The official VueJS documentation.',
          link: 'https://vuejs.org',
        },
        {
          id: 'google',
          title: 'Google',
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
      addRessource: this.addRessource,
    };
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addRessource(title, desc, url) {
      const newRessouce = {
        id: new Date().toISOString(),
        title: title,
        description: desc,
        link: url,
      };
      this.storedRessources.unshift(newRessouce);
      this.selectedTab = 'stored-ressources';
    },
  },
};
</script>

<style scoped></style>
