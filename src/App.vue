<template>
  <stored-ressources :ressources="storedRessources"></stored-ressources>
</template>

<script>
import StoredRessources from './components/learning-ressources/StoredRessources.vue';

export default {
  components: {
    StoredRessources,
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

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}

</style>
