<template>
  <ul>
    <list-resources
      v-for="ressource in ressources"
      :key="ressource.id"
      :title="ressource.title"
      :description="ressource.description"
      :link="ressource.link"
    ></list-resources>
  </ul>
</template>

<script>
import ListResources from './ListRessources.vue';

export default {
  components: {
    ListResources,
  },
  inject: ['ressources'],
};
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
