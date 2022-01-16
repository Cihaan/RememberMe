<template>
  <ul></ul>
</template>

<script>
export default {
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
