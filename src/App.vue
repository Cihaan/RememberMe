<template>
  <the-header title="RememberMe"></the-header>
  <the-ressources></the-ressources>
</template>

<script>
import TheHeader from './components/layouts/TheHeader.vue';
import TheRessources from './components/learning-ressources/TheRessources.vue';

export default {
  components: {
    TheHeader,
    TheRessources,
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
