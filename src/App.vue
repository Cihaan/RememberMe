<template>
  <list-resources
    v-for="ressource in storedRessources"
    :key="ressource.id"
    :tittle="ressource.tittle"
    :description="ressource.description"
    :link="ressource.link"
  ></list-resources>
</template>

<script>
import ListResources from './components/ListRessources.vue';

export default {
  components: {
    ListResources,
  },
  data() {
    return {
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
};
</script>
